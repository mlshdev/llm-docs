> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmessagecomposebarbutton/init(image:)](https://developer.apple.com/documentation/carplay/cpmessagecomposebarbutton/init(image:))

# init(image:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a message compose button that displays a custom image.

## Declaration

```swift
init(image: UIImage)
```

## Parameters

- `image`: The image to display on the button.

<a id="return-value"></a>

## Return Value

A message compose button with the custom image.

<a id="Discussion"></a>

## Discussion

> **Note**

>  This button type does not use a handler. Instead, tapping this button activates Siri and initiates the compose message flow.

## See Also

### Creating a Message Compose Bar Button

- [init()](init%28%29.md): Creates a message compose button with a system-provided image.

# initWithImage: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a message compose button that displays a custom image.

## Declaration

```objectivec
- (instancetype) initWithImage:(UIImage *) image;
```

## Parameters

- `image`: The image to display on the button.

<a id="return-value"></a>

## Return Value

A message compose button with the custom image.

<a id="Discussion"></a>

## Discussion

> **Note**

>  This button type does not use a handler. Instead, tapping this button activates Siri and initiates the compose message flow.

## See Also

### Creating a Message Compose Bar Button

- [init](init%28%29.md): Creates a message compose button with a system-provided image.
- [new](new.md): Creates a message compose button with a system-provided image.
