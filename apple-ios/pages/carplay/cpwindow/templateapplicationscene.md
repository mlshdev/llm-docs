> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpwindow/templateapplicationscene

# templateApplicationScene (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The scene associated with the window.

## Declaration

```swift
weak var templateApplicationScene: CPTemplateApplicationScene? { get set }
```

<a id="discussion"></a>

## Discussion

While the window’s associated scene is active, you can access it from this property.

# templateApplicationScene (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The scene associated with the window.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) CPTemplateApplicationScene * templateApplicationScene;
```

<a id="discussion"></a>

## Discussion

While the window’s associated scene is active, you can access it from this property.
