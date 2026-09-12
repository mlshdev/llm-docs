> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarappearance/init(idiom:)](https://developer.apple.com/documentation/uikit/uibarappearance/init(idiom:))

# init(idiom:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a new bar appearance object that targets the specified idiom.

## Declaration

```swift
init(idiom: UIUserInterfaceIdiom)
```

## Parameters

- `idiom`: The device idiom to target. If you specify an idiom that doesn’t make sense for the current device, this method adjusts the idiom to an appropriate value.

<a id="return-value"></a>

## Return Value

A new bar appearance object containing default values for the specified idiom.

## See Also

### Creating a custom bar appearance object

- [init(barAppearance:)](init%28barappearance_%29.md): Creates a new bar appearance object by copying relevant data from the specified appearance object.
- [init()](init%28%29.md): Creates a new bar appearance object containing default values.
- [init(coder:)](init%28coder_%29.md): Creates an appearance object from data in an unarchiver.

# initWithIdiom: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a new bar appearance object that targets the specified idiom.

## Declaration

```objectivec
- (instancetype) initWithIdiom:(UIUserInterfaceIdiom) idiom;
```

## Parameters

- `idiom`: The device idiom to target. If you specify an idiom that doesn’t make sense for the current device, this method adjusts the idiom to an appropriate value.

<a id="return-value"></a>

## Return Value

A new bar appearance object containing default values for the specified idiom.

## See Also

### Creating a custom bar appearance object

- [initWithBarAppearance:](init%28barappearance_%29.md): Creates a new bar appearance object by copying relevant data from the specified appearance object.
- [init](init%28%29.md): Creates a new bar appearance object containing default values.
- [initWithCoder:](init%28coder_%29.md): Creates an appearance object from data in an unarchiver.
