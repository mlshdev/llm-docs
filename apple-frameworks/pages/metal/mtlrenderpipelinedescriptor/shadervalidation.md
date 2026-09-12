> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinedescriptor/shadervalidation](https://developer.apple.com/documentation/metal/mtlrenderpipelinedescriptor/shadervalidation)

# shaderValidation (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A value that enables or disables shader validation for the pipeline.

## Declaration

```swift
var shaderValidation: MTLShaderValidation { get set }
```

<a id="discussion"></a>

## Discussion

You can override the value using either of these environment variables: `MTL_SHADER_VALIDATION_ENABLE_PIPELINES` or `MTL_SHADER_VALIDATION_DISABLE_PIPELINES.`

# shaderValidation (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A value that enables or disables shader validation for the pipeline.

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLShaderValidation shaderValidation;
```

<a id="discussion"></a>

## Discussion

You can override the value using either of these environment variables: `MTL_SHADER_VALIDATION_ENABLE_PIPELINES` or `MTL_SHADER_VALIDATION_DISABLE_PIPELINES.`
