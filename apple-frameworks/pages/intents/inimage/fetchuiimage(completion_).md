> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inimage/fetchuiimage(completion:)](https://developer.apple.com/documentation/intents/inimage/fetchuiimage(completion:))

# fetchUIImage(completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Fetches the image and provides it to the specified completion handler.

## Declaration

```swift
func fetchUIImage(completion: @escaping @Sendable (UIImage?) -> Void)
```

```swift
func fetchUIImage() async -> UIImage?
```

## Parameters

- `completion`: The completion handler that executes when the image is available. The handler has no return value and takes the following parameter:

  - **`image`**: A [UIImage](../../uikit/uiimage.md) that contains the image data. If there’s an error, this parameter is `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to fetch an instance of [UIImage](../../uikit/uiimage.md) that contains the corresponding image data. Provide a completion handler; otherwise, calling this method does nothing. The handler executes on the same thread that invokes the method.

# fetchUIImageWithCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Fetches the image and provides it to the specified completion handler.

## Declaration

```objectivec
- (void) fetchUIImageWithCompletion:(void (^)(UIImage *image)) completion;
```

## Parameters

- `completion`: The completion handler that executes when the image is available. The handler has no return value and takes the following parameter:

  - **`image`**: A [UIImage](../../uikit/uiimage.md) that contains the image data. If there’s an error, this parameter is `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to fetch an instance of [UIImage](../../uikit/uiimage.md) that contains the corresponding image data. Provide a completion handler; otherwise, calling this method does nothing. The handler executes on the same thread that invokes the method.
