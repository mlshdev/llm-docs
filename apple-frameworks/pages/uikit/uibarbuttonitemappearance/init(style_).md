> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitemappearance/init(style:)](https://developer.apple.com/documentation/uikit/uibarbuttonitemappearance/init(style:))

# init(style:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates an appearance with default values that are appropriate for the specified button style.

## Declaration

```swift
init(style: UIBarButtonItem.Style)
```

## Parameters

- `style`: The button style. UIKit uses this value to configure the default appearance attributes. For a list of possible values, see [UIBarButtonItem.Style](../uibarbuttonitem/style-swift.enum.md).

<a id="return-value"></a>

## Return Value

A new bar button item appearance object containing the default appearances for the specified button style.

## See Also

### Creating a bar button item appearance object

- [init()](init%28%29.md): Creates an appearance object with default values that are appropriate for a plain button.
- [init(coder:)](init%28coder_%29.md): Creates an appearance object from data in an unarchiver.

# initWithStyle: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates an appearance with default values that are appropriate for the specified button style.

## Declaration

```objectivec
- (instancetype) initWithStyle:(UIBarButtonItemStyle) style;
```

## Parameters

- `style`: The button style. UIKit uses this value to configure the default appearance attributes. For a list of possible values, see [UIBarButtonItemStyle](../uibarbuttonitem/style-swift.enum.md).

<a id="return-value"></a>

## Return Value

A new bar button item appearance object containing the default appearances for the specified button style.

## See Also

### Creating a bar button item appearance object

- [init](init%28%29.md): Creates an appearance object with default values that are appropriate for a plain button.
- [initWithCoder:](init%28coder_%29.md): Creates an appearance object from data in an unarchiver.
