> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiconfigurationcolortransformer-swift.struct](https://developer.apple.com/documentation/uikit/uiconfigurationcolortransformer-swift.struct)

# UIConfigurationColorTransformer

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

A transformer that generates a modified output color from an input color.

## Declaration

```swift
struct UIConfigurationColorTransformer
```

<a id="overview"></a>

## Overview

A color transformer takes an input color and modifies it to produce a different output color. For example, you might have a color transformer that returns a grayscale or reduced alpha version of the input color.

Because color transformers can use the same base input color to produce a number of variants of that color, you can create different appearances for different states of your views.

## Topics

### Creating a color transformer

- [init(\_:)](uiconfigurationcolortransformer-swift.struct/init%28__%29.md): Creates a color transformer with the specified closure.
- [grayscale](uiconfigurationcolortransformer-swift.struct/grayscale.md): Creates a color transformer that generates a grayscale version of the color.
- [preferredTint](uiconfigurationcolortransformer-swift.struct/preferredtint.md): A color transformer that returns the preferred system accent color.
- [monochromeTint](uiconfigurationcolortransformer-swift.struct/monochrometint.md): A color transformer that returns the color with a monochrome tint.

### Calling the color transformer

- [transform](uiconfigurationcolortransformer-swift.struct/transform.md): The transform closure of the color transformer.
- [callAsFunction(\_:)](uiconfigurationcolortransformer-swift.struct/callasfunction%28__%29.md): Calls the transform closure of the color transformer.
