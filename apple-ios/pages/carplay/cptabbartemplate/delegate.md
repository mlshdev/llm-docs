> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptabbartemplate/delegate](https://developer.apple.com/documentation/carplay/cptabbartemplate/delegate)

# delegate (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The object that acts as the template’s delegate.

## Declaration

```swift
weak var delegate: (any CPTabBarTemplateDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate must conform to the [CPTabBarTemplateDelegate](../cptabbartemplatedelegate.md) protocol.

## See Also

### Managing Tab Bar Interactions

- [CPTabBarTemplateDelegate](../cptabbartemplatedelegate.md): The methods an object implements to act as the delegate for a tab bar template.

# delegate (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The object that acts as the template’s delegate.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<CPTabBarTemplateDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate must conform to the [CPTabBarTemplateDelegate](../cptabbartemplatedelegate.md) protocol.

## See Also

### Managing Tab Bar Interactions

- [CPTabBarTemplateDelegate](../cptabbartemplatedelegate.md): The methods an object implements to act as the delegate for a tab bar template.
