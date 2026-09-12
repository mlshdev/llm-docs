> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontextmenuconfiguration/identifier](https://developer.apple.com/documentation/uikit/uicontextmenuconfiguration/identifier)

# identifier (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

The unique identifier for this configuration object.

## Declaration

```swift
var identifier: any NSCopying { get }
```

<a id="Discussion"></a>

## Discussion

If you did not provide an identifier when creating this object, UIKit assigns a new [UUID](../../foundation/uuid.md) object to this property.

# identifier (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

The unique identifier for this configuration object.

## Declaration

```objectivec
@property (nonatomic, readonly) id<NSCopying> identifier;
```

<a id="Discussion"></a>

## Discussion

If you did not provide an identifier when creating this object, UIKit assigns a new [UUID](../../foundation/uuid.md) object to this property.
