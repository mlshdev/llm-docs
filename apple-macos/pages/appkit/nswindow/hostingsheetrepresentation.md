> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/hostingsheetrepresentation](https://developer.apple.com/documentation/appkit/nswindow/hostingsheetrepresentation)

# NSWindow.HostingSheetRepresentation

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 26.0+

A class representing a SwiftUI view hosted in an AppKit sheet.

## Declaration

```swift
class HostingSheetRepresentation<Content> where Content : View
```

<a id="overview"></a>

## Overview

This is created and returned by [beginSheet(content:completionHandler:)](beginsheet%28content_completionhandler_%29.md) as a representation of the presented sheet. It can be used to change the root view of the sheet while presented or be used to programamtically dismiss the sheet from an AppKit context using [endSheet(\_:)](endsheet%28__%29-6af2u.md).

## Topics

### Instance Properties

- [rootView](hostingsheetrepresentation/rootview.md): The root view of the sheet.
