> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvdisplaylink-k0k](https://developer.apple.com/documentation/corevideo/cvdisplaylink-k0k)

# CVDisplayLink (Swift)

**Framework:** Core Video  
**Kind:** API Collection

A high-priority thread that notifies your app when a given display will need each frame.

<a id="Overview"></a>

## Overview

A Core Video display link provides a separate high-priority thread to notify your application when a given display will need each frame. You can use a display link to easily synchronize with the refresh rate of a display. The display link API uses the Core Foundation class system internally to provide reference counting behavior and other useful properties.

## Topics

### Creating Display Links

- [CVDisplayLinkCreateWithCGDisplay(\_:\_:)](cvdisplaylinkcreatewithcgdisplay%28____%29.md): Deprecated. Creates a display link for a single display.
- [CVDisplayLinkCreateWithCGDisplays(\_:\_:\_:)](cvdisplaylinkcreatewithcgdisplays%28______%29.md): Deprecated. Creates a display link for an array of displays.
- [CVDisplayLinkCreateWithActiveCGDisplays(\_:)](cvdisplaylinkcreatewithactivecgdisplays%28__%29.md): Deprecated. Creates a display link capable of being used with all active displays.
- [CVDisplayLinkCreateWithOpenGLDisplayMask(\_:\_:)](cvdisplaylinkcreatewithopengldisplaymask%28____%29.md): Deprecated. Creates a display link from an OpenGL display mask.

### Configuring Display Links

- [CVDisplayLinkSetCurrentCGDisplay(\_:\_:)](cvdisplaylinksetcurrentcgdisplay%28____%29.md): Deprecated. Sets the current display of a display link.
- [CVDisplayLinkSetCurrentCGDisplayFromOpenGLContext(\_:\_:\_:)](cvdisplaylinksetcurrentcgdisplayfromopenglcontext%28______%29.md): Deprecated. Selects the display link most optimal for the current renderer of an OpenGL context.
- [CVDisplayLinkSetOutputCallback(\_:\_:\_:)](cvdisplaylinksetoutputcallback%28______%29.md): Deprecated. Sets the renderer output callback function.
- [CVDisplayLinkSetOutputHandler(\_:\_:)](cvdisplaylinksetoutputhandler%28____%29.md): Deprecated.
- [CVDisplayLinkOutputHandler](cvdisplaylinkoutputhandler.md)

### Inspecting Display Links

- [CVDisplayLinkGetCurrentCGDisplay(\_:)](cvdisplaylinkgetcurrentcgdisplay%28__%29.md): Deprecated. Gets the current display associated with a display link.
- [CVDisplayLinkGetCurrentTime(\_:\_:)](cvdisplaylinkgetcurrenttime%28____%29.md): Deprecated. Retrieves the current (“now”) time of a given display link.
- [CVDisplayLinkTranslateTime(\_:\_:\_:)](cvdisplaylinktranslatetime%28______%29.md): Deprecated. Translates the time in the display link’s time base from one representation to another.
- [CVDisplayLinkGetActualOutputVideoRefreshPeriod(\_:)](cvdisplaylinkgetactualoutputvideorefreshperiod%28__%29.md): Deprecated. Retrieves the actual output refresh period of a display as measured by the system time.
- [CVDisplayLinkGetNominalOutputVideoRefreshPeriod(\_:)](cvdisplaylinkgetnominaloutputvideorefreshperiod%28__%29.md): Deprecated. Retrieves the nominal refresh period of a display link.
- [CVDisplayLinkGetOutputVideoLatency(\_:)](cvdisplaylinkgetoutputvideolatency%28__%29.md): Deprecated. Retrieves the nominal latency of a display link.
- [CVDisplayLinkIsRunning(\_:)](cvdisplaylinkisrunning%28__%29.md): Deprecated. Indicates whether a given display link is running.
- [CVDisplayLinkGetTypeID()](cvdisplaylinkgettypeid%28%29.md): Deprecated. Obtains the Core Foundation ID for the display link data type.

### Managing Display Links

- [CVDisplayLinkStart(\_:)](cvdisplaylinkstart%28__%29.md): Deprecated. Activates a display link.
- [CVDisplayLinkStop(\_:)](cvdisplaylinkstop%28__%29.md): Deprecated. Stops a display link.

### Data Types

- [CVDisplayLink](cvdisplaylink.md): A reference to a display link object.
- [CVOptionFlags](cvoptionflags.md): The flags to be used for the display link output callback function.

### Callbacks

- [CVDisplayLinkOutputCallback](cvdisplaylinkoutputcallback.md): A type for a display link callback function that the system invokes when it’s time for the app to output a video frame.
- [CVDisplayLinkOutputHandler](cvdisplaylinkoutputhandler.md)

## See Also

### Time Management

- [CVTime](cvtime-q1e.md): A structure used for storing Core Video time values.

# CVDisplayLink (Objective-C)

**Framework:** Core Video  
**Kind:** API Collection

A high-priority thread that notifies your app when a given display will need each frame.

<a id="Overview"></a>

## Overview

A Core Video display link provides a separate high-priority thread to notify your application when a given display will need each frame. You can use a display link to easily synchronize with the refresh rate of a display. The display link API uses the Core Foundation class system internally to provide reference counting behavior and other useful properties.

## Topics

### Creating Display Links

- [CVDisplayLinkCreateWithCGDisplay](cvdisplaylinkcreatewithcgdisplay%28____%29.md): Deprecated. Creates a display link for a single display.
- [CVDisplayLinkCreateWithCGDisplays](cvdisplaylinkcreatewithcgdisplays%28______%29.md): Deprecated. Creates a display link for an array of displays.
- [CVDisplayLinkCreateWithActiveCGDisplays](cvdisplaylinkcreatewithactivecgdisplays%28__%29.md): Deprecated. Creates a display link capable of being used with all active displays.
- [CVDisplayLinkCreateWithOpenGLDisplayMask](cvdisplaylinkcreatewithopengldisplaymask%28____%29.md): Deprecated. Creates a display link from an OpenGL display mask.

### Configuring Display Links

- [CVDisplayLinkSetCurrentCGDisplay](cvdisplaylinksetcurrentcgdisplay%28____%29.md): Deprecated. Sets the current display of a display link.
- [CVDisplayLinkSetCurrentCGDisplayFromOpenGLContext](cvdisplaylinksetcurrentcgdisplayfromopenglcontext%28______%29.md): Deprecated. Selects the display link most optimal for the current renderer of an OpenGL context.
- [CVDisplayLinkSetOutputCallback](cvdisplaylinksetoutputcallback%28______%29.md): Deprecated. Sets the renderer output callback function.
- [CVDisplayLinkSetOutputHandler](cvdisplaylinksetoutputhandler%28____%29.md): Deprecated.
- [CVDisplayLinkOutputHandler](cvdisplaylinkoutputhandler.md)

### Inspecting Display Links

- [CVDisplayLinkGetCurrentCGDisplay](cvdisplaylinkgetcurrentcgdisplay%28__%29.md): Deprecated. Gets the current display associated with a display link.
- [CVDisplayLinkGetCurrentTime](cvdisplaylinkgetcurrenttime%28____%29.md): Deprecated. Retrieves the current (“now”) time of a given display link.
- [CVDisplayLinkTranslateTime](cvdisplaylinktranslatetime%28______%29.md): Deprecated. Translates the time in the display link’s time base from one representation to another.
- [CVDisplayLinkGetActualOutputVideoRefreshPeriod](cvdisplaylinkgetactualoutputvideorefreshperiod%28__%29.md): Deprecated. Retrieves the actual output refresh period of a display as measured by the system time.
- [CVDisplayLinkGetNominalOutputVideoRefreshPeriod](cvdisplaylinkgetnominaloutputvideorefreshperiod%28__%29.md): Deprecated. Retrieves the nominal refresh period of a display link.
- [CVDisplayLinkGetOutputVideoLatency](cvdisplaylinkgetoutputvideolatency%28__%29.md): Deprecated. Retrieves the nominal latency of a display link.
- [CVDisplayLinkIsRunning](cvdisplaylinkisrunning%28__%29.md): Deprecated. Indicates whether a given display link is running.
- [CVDisplayLinkGetTypeID](cvdisplaylinkgettypeid%28%29.md): Deprecated. Obtains the Core Foundation ID for the display link data type.

### Retaining and Releasing Display Links

- [CVDisplayLinkRelease](cvdisplaylinkrelease.md): Deprecated. Releases a display link.
- [CVDisplayLinkRetain](cvdisplaylinkretain.md): Deprecated. Retains a display link.

### Managing Display Links

- [CVDisplayLinkStart](cvdisplaylinkstart%28__%29.md): Deprecated. Activates a display link.
- [CVDisplayLinkStop](cvdisplaylinkstop%28__%29.md): Deprecated. Stops a display link.

### Data Types

- [CVDisplayLinkRef](cvdisplaylink.md): A reference to a display link object.
- [CVOptionFlags](cvoptionflags.md): The flags to be used for the display link output callback function.

### Callbacks

- [CVDisplayLinkOutputCallback](cvdisplaylinkoutputcallback.md): A type for a display link callback function that the system invokes when it’s time for the app to output a video frame.
- [CVDisplayLinkOutputHandler](cvdisplaylinkoutputhandler.md)

## See Also

### Time Management

- [CVTime](cvtime-q1e.md): A structure used for storing Core Video time values.
