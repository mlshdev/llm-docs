> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarappearance/init(barappearance:)](https://developer.apple.com/documentation/uikit/uibarappearance/init(barappearance:))

# init(barAppearance:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a new bar appearance object by copying relevant data from the specified appearance object.

## Declaration

```swift
init(barAppearance: UIBarAppearance)
```

## Parameters

- `barAppearance`: The bar appearance object from which to copy the relevant properties.

<a id="return-value"></a>

## Return Value

A new bar appearance object containing the relevant properties from the other object.

<a id="Discussion"></a>

## Discussion

This method copies over the properties from `barAppearance` that are also relevant to the new bar appearance object.

## See Also

### Creating a custom bar appearance object

- [init(idiom:)](init%28idiom_%29.md): Creates a new bar appearance object that targets the specified idiom.
- [init()](init%28%29.md): Creates a new bar appearance object containing default values.
- [init(coder:)](init%28coder_%29.md): Creates an appearance object from data in an unarchiver.

# initWithBarAppearance: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a new bar appearance object by copying relevant data from the specified appearance object.

## Declaration

```objectivec
- (instancetype) initWithBarAppearance:(UIBarAppearance *) barAppearance;
```

## Parameters

- `barAppearance`: The bar appearance object from which to copy the relevant properties.

<a id="return-value"></a>

## Return Value

A new bar appearance object containing the relevant properties from the other object.

<a id="Discussion"></a>

## Discussion

This method copies over the properties from `barAppearance` that are also relevant to the new bar appearance object.

## See Also

### Creating a custom bar appearance object

- [initWithIdiom:](init%28idiom_%29.md): Creates a new bar appearance object that targets the specified idiom.
- [init](init%28%29.md): Creates a new bar appearance object containing default values.
- [initWithCoder:](init%28coder_%29.md): Creates an appearance object from data in an unarchiver.
