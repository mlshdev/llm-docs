> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shaderlibrary](https://developer.apple.com/documentation/swiftui/shaderlibrary)

# ShaderLibrary

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A Metal shader library.

## Declaration

```swift
@dynamicMemberLookup struct ShaderLibrary
```

## Topics

### Getting the default shader library

- [default](shaderlibrary/default.md): The default shader library of the main (i.e. app) bundle.
- [bundle(\_:)](shaderlibrary/bundle%28__%29.md): Returns the default shader library of the specified bundle.

### Creating a shader library

- [init(url:)](shaderlibrary/init%28url_%29.md): Creates a new Metal shader library from the contents of `url`, which must be the location of precompiled Metal library. Functions compiled from the returned library will only be cached as long as the returned library exists.
- [init(data:)](shaderlibrary/init%28data_%29.md): Creates a new Metal shader library from `data`, which must be the contents of precompiled Metal library. Functions compiled from the returned library will only be cached as long as the returned library exists.

### Access shader functions

- [subscript(dynamicMember:)](shaderlibrary/subscript%28dynamicmember_%29-swift.type.subscript.md): Returns a new shader function representing the stitchable MSL function called `name` in the default shader library.

### Subscripts

- [subscript(dynamicMember:)](shaderlibrary/subscript%28dynamicmember_%29-swift.subscript.md): Returns a new shader function representing the stitchable MSL function in the library called `name`.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing Metal shaders

- [colorEffect(\_:isEnabled:)](view/coloreffect%28__isenabled_%29.md): Returns a new view that applies `shader` to `self` as a filter effect on the color of each pixel.
- [distortionEffect(\_:maxSampleOffset:isEnabled:)](view/distortioneffect%28__maxsampleoffset_isenabled_%29.md): Returns a new view that applies `shader` to `self` as a geometric distortion effect on the location of each pixel.
- [layerEffect(\_:maxSampleOffset:isEnabled:)](view/layereffect%28__maxsampleoffset_isenabled_%29.md): Returns a new view that applies `shader` to `self` as a filter on the raster layer created from `self`.
- [Shader](shader.md): A reference to a function in a Metal shader library, along with its bound uniform argument values.
- [ShaderFunction](shaderfunction.md): A reference to a function in a Metal shader library.
