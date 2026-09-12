> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional-video-applications/setting-up-for-fxplug-development](https://developer.apple.com/documentation/professional-video-applications/setting-up-for-fxplug-development)

# Setting up for FxPlug development

**Interface languages:** Swift, Objective-C

**Framework:** Professional Video Applications  
**Kind:** Article

Download and install the required software to develop FxPlug plug-ins.

<a id="overview"></a>

## Overview

Developing FxPlug plug-ins requires that you have certain developer software installed on your Mac along with host applications.

<a id="Install-software"></a>

### Install software

Your system must have the following software installed:

- [Xcode](https://apps.apple.com/app/xcode/id497799835) 15 or newer
- FxPlug 4 SDK (download from [Apple’s developer website](https://developer.apple.com/download/all/?q=FxPlug))
- [Motion](https://apps.apple.com/app/motion/id434290957) 5.6.4 or newer
- [Final Cut Pro](https://apps.apple.com/app/final-cut-pro/id424389933) 10.6.6 or newer

<a id="Use-plug-ins-in-host-applications"></a>

### Use plug-ins in host applications

Plug-ins can be used in Final Cut Pro for Mac and Motion, referred to as the host applications. Use plug-ins directly in Motion; in Final Cut Pro, however, you must wrap plug-ins in a template, as described in [Preparing plug-ins for use in Final Cut Pro](preparing-plug-ins-for-use-in-final-cut-pro.md). Once built, macOS automatically recognizes the plug-ins and vends them to the host applications on request.

## See Also

### Essentials

- [Using out-of-process FxPlug plug-ins](using-out-of-process-fxplug-plug-ins.md): Register and render FxPlug plug-ins with Motion and Final Cut Pro.
