> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/element-dictionary-keys](https://developer.apple.com/documentation/webkit/element-dictionary-keys)

# Element Dictionary Keys

**Interface languages:** Swift, Objective-C

**Framework:** WebKit  
**Kind:** API Collection

Predefined keys used to access an element dictionary.

<a id="overview"></a>

## Overview

These constants represent predefined keys used to access an element dictionary. An element dictionary is an NSDictionary representation of an HTML element, as in a clicked or selected element. Some methods in the WebPolicyDelegate informal protocol have an element dictionary argument. The descriptions below describe the dictionary value for the key.

## Topics

### Constants

- [WebElementDOMNodeKey](webelementdomnodekey.md): Deprecated. The DOMNode for this element.
- [WebElementFrameKey](webelementframekey.md): Deprecated. The WebFrame object associated with this element.
- [WebElementImageAltStringKey](webelementimagealtstringkey.md): Deprecated. An NSString of the ALT attribute of an image element.
- [WebElementImageKey](webelementimagekey.md): Deprecated. An NSImage representing an image element.
- [WebElementImageRectKey](webelementimagerectkey.md): Deprecated. An NSValue containing an NSRect, the size of an image element.
- [WebElementImageURLKey](webelementimageurlkey.md): Deprecated. An NSURL containing the location of an image element.
- [WebElementIsSelectedKey](webelementisselectedkey.md): Deprecated. An NSNumber used as a BOOL value to indicate whether a text element is selected or not. Zero value indicates false, true otherwise.
- [WebElementLinkURLKey](webelementlinkurlkey.md): Deprecated. An NSURL containing the location of a link if the element is within an anchor.
- [WebElementLinkTargetFrameKey](webelementlinktargetframekey.md): Deprecated. The WebFrame object associated with the target of the anchor.
- [WebElementLinkTitleKey](webelementlinktitlekey.md): Deprecated. An NSString containing the title of an anchor.
- [WebElementLinkLabelKey](webelementlinklabelkey.md): Deprecated. An NSString containing the text within an anchor.
