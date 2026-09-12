> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skreferencenode/init(url:)-3jryz](https://developer.apple.com/documentation/spritekit/skreferencenode/init(url:)-3jryz)

# init(url:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a reference node from a URL.

## Declaration

```swift
convenience init(url referenceURL: URL)
```

## Parameters

- `referenceURL`: The URL of the reference node.

<a id="return-value"></a>

## Return Value

A newly initialized reference node.

<a id="Discussion"></a>

## Discussion

This intializer is for loading archives that reside outside of the app bundle.

## See Also

### Initializers

- [init(url:)](init%28url_%29-429mo.md): Initializes a reference node from a URL.
- [init(fileNamed:)](init%28filenamed_%29-77gs0.md): Creates a reference node from a file in the app’s main bundle.
- [init(fileNamed:)](init%28filenamed_%29-2yeh2.md): Initializes a reference node from a file in the app’s main bundle.
- [init(coder:)](init%28coder_%29.md): A method that initializes a reference node from an archive.

# referenceNodeWithURL: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a reference node from a URL.

## Declaration

```objectivec
+ (instancetype) referenceNodeWithURL:(NSURL *) referenceURL;
```

## Parameters

- `referenceURL`: The URL of the reference node.

<a id="return-value"></a>

## Return Value

A newly initialized reference node.

<a id="Discussion"></a>

## Discussion

This intializer is for loading archives that reside outside of the app bundle.

## See Also

### Initializers

- [initWithURL:](init%28url_%29-429mo.md): Initializes a reference node from a URL.
- [referenceNodeWithFileNamed:](init%28filenamed_%29-77gs0.md): Creates a reference node from a file in the app’s main bundle.
- [initWithFileNamed:](init%28filenamed_%29-2yeh2.md): Initializes a reference node from a file in the app’s main bundle.
- [initWithCoder:](init%28coder_%29.md): A method that initializes a reference node from an archive.
