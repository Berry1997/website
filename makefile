LIBS=-lcppcms -lbooster
website: web_schema.tmpl tmp.cpp content.h
	cppcms_tmpl_cc web_schema.tmpl -o web_schema.cpp
	$(CXX) -Wall tmp.cpp web_schema.cpp -o website $(LIBS)
run: website
	./website -c config.js 
schema: web_schema.tmpl content.h
	cppcms_tmpl_cc web_schema.tmpl -o web_schema.cpp
clean:
	rm -fr *.exe *.so web_schema.cpp cppcms_rundir website
