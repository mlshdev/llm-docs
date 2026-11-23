> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmessagecomposebarbutton/init(image:)

# init(image:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a button for composing messages that uses a custom image you provide.

## Declaration

```swift
init(image: UIImage)
```

## Parameters

- `image`: The image to display in the button. Provide an image that scales to different sizes. For best results, initialize your image object with an SF Symbol.

<a id="return-value"></a>

## Return Value

An initialized bar button for composing messages

## See Also

### Creating a message compose bar button

- [init()](init%28%29.md): Creates a button for composing messages that uses the system-provided image.

# initWithImage: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a button for composing messages that uses a custom image you provide.

## Declaration

```objectivec
- (instancetype) initWithImage:(UIImage *) image;
```

## Parameters

- `image`: The image to display in the button. Provide an image that scales to different sizes. For best results, initialize your image object with an SF Symbol.

<a id="return-value"></a>

## Return Value

An initialized bar button for composing messages

## See Also

### Creating a message compose bar button

- [init](init%28%29.md): Creates a button for composing messages that uses the system-provided image.
- [new](new.md)
