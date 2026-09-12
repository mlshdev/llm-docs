> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvstylefactory/registerstylename(_:type:inherited:)](https://developer.apple.com/documentation/tvmlkit/tvstylefactory/registerstylename(_:type:inherited:))

# registerStyleName(\_:type:inherited:) (Swift)

**Framework:** TVMLKit  
**Kind:** Type Method  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

Creates a new style property of the indicated type.

> Please use SwiftUI or UIKit

## Declaration

```swift
class func registerStyleName(_ styleName: String, type: TVViewElementStyleType, inherited: Bool)
```

## Parameters

- `styleName`: The name used to identify the style.
- `type`: The element style type as specified by [TVViewElementStyleType](../tvviewelementstyletype.md).
- `inherited`: Boolean indicating whether the style is able to be inherited by other styles.

## See Also

### Creating New Style Properties

- [TVViewElementStyleType](../tvviewelementstyletype.md): Deprecated. Describes the different style types for an element.

# registerStyle:withType:inherited: (Objective-C)

**Framework:** TVMLKit  
**Kind:** Type Method  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

Creates a new style property of the indicated type.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
+ (void) registerStyle:(NSString *) styleName withType:(TVViewElementStyleType) type inherited:(BOOL) inherited;
```

## Parameters

- `styleName`: The name used to identify the style.
- `type`: The element style type as specified by [TVViewElementStyleType](../tvviewelementstyletype.md).
- `inherited`: Boolean indicating whether the style is able to be inherited by other styles.

## See Also

### Creating New Style Properties

- [TVViewElementStyleType](../tvviewelementstyletype.md): Deprecated. Describes the different style types for an element.
