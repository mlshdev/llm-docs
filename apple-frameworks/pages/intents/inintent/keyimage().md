> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inintent/keyimage()](https://developer.apple.com/documentation/intents/inintent/keyimage())

# keyImage() (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The most relevant image to display to the user.

## Declaration

```swift
func keyImage() -> INImage?
```

<a id="return-value"></a>

## Return Value

An image associated with a named parameter or another image defined in the intent.

# keyImage (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The most relevant image to display to the user.

## Declaration

```objectivec
- (INImage *) keyImage;
```

<a id="return-value"></a>

## Return Value

An image associated with a named parameter or another image defined in the intent.

## See Also

### Associating an Image

- [imageForParameterNamed:](https://developer.apple.com/documentation/intents/inintent/imageforparameternamed:): Returns the image associated with the specified parameter.
- [setImage:forParameterNamed:](https://developer.apple.com/documentation/intents/inintent/setimage:forparameternamed:): Sets the image to use for the specified parameter.
