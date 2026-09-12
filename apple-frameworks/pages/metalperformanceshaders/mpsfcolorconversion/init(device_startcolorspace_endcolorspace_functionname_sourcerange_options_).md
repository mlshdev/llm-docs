> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsfcolorconversion/init(device:startcolorspace:endcolorspace:functionname:sourcerange:options:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsfcolorconversion/init(device:startcolorspace:endcolorspace:functionname:sourcerange:options:))

# init(device:startColorSpace:endColorSpace:functionName:sourceRange:options:)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
convenience init(device: any MTLDevice, startColorSpace start: CGColorSpace, endColorSpace end: CGColorSpace, functionName name: String, sourceRange: UnsafePointer<MPSFunctions_AABB>?, options: MPSFColorConversionOptions = []) throws
```
