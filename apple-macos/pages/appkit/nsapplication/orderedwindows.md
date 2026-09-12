> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/orderedwindows](https://developer.apple.com/documentation/appkit/nsapplication/orderedwindows)

# orderedWindows (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array of window objects arranged according to their front-to-back ordering on the screen.

## Declaration

```swift
var orderedWindows: [NSWindow] { get }
```

<a id="Discussion"></a>

## Discussion

Only windows that are typically scriptable are included in the array. For example, panels are not included. This property is accessed during script command evaluation—for example, while finding the window in the script statement `close the second window`. For information on how your app can return its own array of ordered windows, see [application:delegateHandlesKey:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/application:delegatehandleskey:).

## See Also

### Scripting your app

- [orderedDocuments](ordereddocuments.md): An array of document objects arranged according to the front-to-back ordering of their associated windows.

# orderedWindows (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array of window objects arranged according to their front-to-back ordering on the screen.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSWindow *> * orderedWindows;
```

<a id="Discussion"></a>

## Discussion

Only windows that are typically scriptable are included in the array. For example, panels are not included. This property is accessed during script command evaluation—for example, while finding the window in the script statement `close the second window`. For information on how your app can return its own array of ordered windows, see [application:delegateHandlesKey:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/application:delegatehandleskey:).

## See Also

### Scripting your app

- [orderedDocuments](ordereddocuments.md): An array of document objects arranged according to the front-to-back ordering of their associated windows.
