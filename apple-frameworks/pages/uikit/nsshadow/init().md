> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsshadow/init()](https://developer.apple.com/documentation/uikit/nsshadow/init())

# init() (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a shadow object with default values.

## Declaration

```swift
init()
```

<a id="return-value"></a>

## Return Value

An `NSShadow` object initialized with `0` as its offset, `0` as its blur radius, and the default color as its color. The returned object may be different from the original receiver.

## See Also

### Creating a shadow

- [init(coder:)](init%28coder_%29.md): Creates a shadow object from data in an unarchiver.

# init (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a shadow object with default values.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="return-value"></a>

## Return Value

An `NSShadow` object initialized with `0` as its offset, `0` as its blur radius, and the default color as its color. The returned object may be different from the original receiver.

## See Also

### Creating a shadow

- [initWithCoder:](init%28coder_%29.md): Creates a shadow object from data in an unarchiver.
