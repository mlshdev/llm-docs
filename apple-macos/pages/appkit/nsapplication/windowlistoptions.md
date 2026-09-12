> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/windowlistoptions](https://developer.apple.com/documentation/appkit/nsapplication/windowlistoptions)

# NSApplication.WindowListOptions (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.12+

This constant indicates a window ordering.

## Declaration

```swift
struct WindowListOptions
```

## Topics

### Options

- [orderedFrontToBack](windowlistoptions/orderedfronttoback.md): The app’s onscreen windows in front-to-back order. By default, [windows](windows.md) is used.

### Initializers

- [init(rawValue:)](windowlistoptions/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Managing App Windows

- [keyWindow](keywindow.md): The window that currently receives keyboard events.
- [mainWindow](mainwindow.md): The app’s main window.
- [window(withWindowNumber:)](window%28withwindownumber_%29.md): Returns the window corresponding to the specified window number.
- [windows](windows.md): An array of the app’s window objects.
- [makeWindowsPerform(\_:inOrder:)](makewindowsperform%28__inorder_%29.md): Deprecated. Sends the specified message to each of the app’s window objects until one returns a non-`nil` value.
- [enumerateWindows(options:using:)](enumeratewindows%28options_using_%29.md): Executes a block for each of the app’s windows.

# NSWindowListOptions (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.12+

This constant indicates a window ordering.

## Declaration

```objectivec
enum NSWindowListOptions : NSInteger;
```

## Topics

### Options

- [NSWindowListOrderedFrontToBack](windowlistoptions/orderedfronttoback.md): The app’s onscreen windows in front-to-back order. By default, [windows](windows.md) is used.

## See Also

### Managing App Windows

- [keyWindow](keywindow.md): The window that currently receives keyboard events.
- [mainWindow](mainwindow.md): The app’s main window.
- [windowWithWindowNumber:](window%28withwindownumber_%29.md): Returns the window corresponding to the specified window number.
- [windows](windows.md): An array of the app’s window objects.
- [makeWindowsPerform:inOrder:](makewindowsperform%28__inorder_%29.md): Deprecated. Sends the specified message to each of the app’s window objects until one returns a non-`nil` value.
- [enumerateWindowsWithOptions:usingBlock:](enumeratewindows%28options_using_%29.md): Executes a block for each of the app’s windows.
