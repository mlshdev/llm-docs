> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uicollectionviewlayout/developmentlayoutdirection

# developmentLayoutDirection (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The direction of the language you used when designing your custom layout.

## Declaration

```swift
var developmentLayoutDirection: UIUserInterfaceLayoutDirection { get }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is the layout direction used by the language associated with the main bundle’s development region. Subclasses may override this property and return a different value.

## See Also

### Supporting right-to-left layouts

- [flipsHorizontallyInOppositeLayoutDirection](flipshorizontallyinoppositelayoutdirection.md): A Boolean value that indicates whether the horizontal coordinate system is automatically flipped at appropriate times.

# developmentLayoutDirection (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

The direction of the language you used when designing your custom layout.

## Declaration

```objectivec
@property (nonatomic, readonly) UIUserInterfaceLayoutDirection developmentLayoutDirection;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is the layout direction used by the language associated with the main bundle’s development region. Subclasses may override this property and return a different value.

## See Also

### Supporting right-to-left layouts

- [flipsHorizontallyInOppositeLayoutDirection](flipshorizontallyinoppositelayoutdirection.md): A Boolean value that indicates whether the horizontal coordinate system is automatically flipped at appropriate times.
