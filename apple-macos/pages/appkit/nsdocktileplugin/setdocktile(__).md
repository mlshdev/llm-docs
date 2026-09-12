> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocktileplugin/setdocktile(_:)](https://developer.apple.com/documentation/appkit/nsdocktileplugin/setdocktile(_:))

# setDockTile(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Invoked when the plug-in is first loaded and when the application is removed from the Dock.

## Declaration

```swift
func setDockTile(_ dockTile: NSDockTile?)
```

## Parameters

- `dockTile`: The dock tile associated with the application, or `nil` if the application has been removed from the Dock.

<a id="Discussion"></a>

## Discussion

The plugin is loaded in a system process at login time or when the application tile is added to the Dock.

The principal class of the plug-in must implement the `NSDockTilePlugIn` protocol.

# setDockTile: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when the plug-in is first loaded and when the application is removed from the Dock.

## Declaration

```objectivec
- (void) setDockTile:(NSDockTile *) dockTile;
```

## Parameters

- `dockTile`: The dock tile associated with the application, or `nil` if the application has been removed from the Dock.

<a id="Discussion"></a>

## Discussion

The plugin is loaded in a system process at login time or when the application tile is added to the Dock.

The principal class of the plug-in must implement the `NSDockTilePlugIn` protocol.
