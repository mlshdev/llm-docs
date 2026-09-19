> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cptemplateapplicationscene/carwindow

# carWindow (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The window that belongs to the scene.

## Declaration

```swift
var carWindow: CPWindow { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to access the window CarPlay creates for your scene. Only navigation apps have access to that window, and use it to draw their map content. All other categories of apps must use templates exclusively to draw their user interfaces.

## See Also

### Accessing the Window

- [CPWindow](../cpwindow.md): A window that displays its content on the CarPlay screen.

# carWindow (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The window that belongs to the scene.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nonnull) CPWindow * carWindow;
```

<a id="Discussion"></a>

## Discussion

Use this property to access the window CarPlay creates for your scene. Only navigation apps have access to that window, and use it to draw their map content. All other categories of apps must use templates exclusively to draw their user interfaces.

## See Also

### Accessing the Window

- [CPWindow](../cpwindow.md): A window that displays its content on the CarPlay screen.
