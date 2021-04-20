package com.amar.SortingVisualization;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {
	
	@RequestMapping(name = "home", value = "/")	
	public ModelAndView Home() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("Home");
		return mv;
	}
}
