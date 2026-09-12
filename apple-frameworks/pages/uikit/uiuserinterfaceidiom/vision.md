> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiuserinterfaceidiom/vision](https://developer.apple.com/documentation/uikit/uiuserinterfaceidiom/vision)

# UIUserInterfaceIdiom.vision (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

An interface designed for visionOS and Apple Vision Pro.

## Declaration

```swift
case vision
```

<a id="Discussion"></a>

## Discussion

If your app has existing code that runs in the [UIUserInterfaceIdiom.pad](pad.md) idiom, you might want to reuse the same code in the [UIUserInterfaceIdiom.vision](vision.md) idiom. The following code shows how to check for these idioms:

```swift
if idiom == .pad || idiom == .vision {
   // Code to run in the iPad or Apple Vision Pro idioms.
} else { 
   // Code to run in other idioms.
}
```

## See Also

### Idioms

- [UIUserInterfaceIdiom.unspecified](unspecified.md): An unspecified idiom.
- [UIUserInterfaceIdiom.phone](phone.md): An interface designed for iPhone and iPod touch.
- [UIUserInterfaceIdiom.pad](pad.md): An interface designed for iPad.
- [UIUserInterfaceIdiom.tv](tv.md): An interface designed for tvOS and Apple TV.
- [UIUserInterfaceIdiom.carPlay](carplay.md): An interface designed for an in-car experience.
- [UIUserInterfaceIdiom.mac](mac.md): An interface designed for the Mac.

# UIUserInterfaceIdiomVision (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

An interface designed for visionOS and Apple Vision Pro.

## Declaration

```objectivec
UIUserInterfaceIdiomVision
```

<a id="Discussion"></a>

## Discussion

If your app has existing code that runs in the [UIUserInterfaceIdiomPad](pad.md) idiom, you might want to reuse the same code in the [UIUserInterfaceIdiomVision](vision.md) idiom. The following code shows how to check for these idioms:

```swift
if idiom == .pad || idiom == .vision {
   // Code to run in the iPad or Apple Vision Pro idioms.
} else { 
   // Code to run in other idioms.
}
```

## See Also

### Idioms

- [UIUserInterfaceIdiomUnspecified](unspecified.md): An unspecified idiom.
- [UIUserInterfaceIdiomPhone](phone.md): An interface designed for iPhone and iPod touch.
- [UIUserInterfaceIdiomPad](pad.md): An interface designed for iPad.
- [UIUserInterfaceIdiomTV](tv.md): An interface designed for tvOS and Apple TV.
- [UIUserInterfaceIdiomCarPlay](carplay.md): An interface designed for an in-car experience.
- [UIUserInterfaceIdiomMac](mac.md): An interface designed for the Mac.
