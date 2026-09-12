> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qccompositionrenderer/value(foroutputkey:oftype:)](https://developer.apple.com/documentation/quartz/qccompositionrenderer/value(foroutputkey:oftype:))

# value(forOutputKey:ofType:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the current value on an output port (identified by its key) of the root patch of the composition.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func value(forOutputKey key: String!, ofType type: String!) -> Any!
```

## Parameters

- `key`: The key associated with an output port for the root patch of a composition. This method throws an exception if `key` is invalid.
- `type`: A string that specifies the class.

<a id="return-value"></a>

## Return Value

The value.

<a id="Discussion"></a>

## Discussion

The value type depends on the type of the port type, as shown in the following table

| Port type | Value type |
| --- | --- |
| Boolean, Index, or Number | [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) or any object that responds to the methods `integerValue`, `floatValue`, or `doubleValue` |
| String | [NSString](https://developer.apple.com/documentation/foundation/nsstring) or any object that responds to the methods`stringValue` or `description` |
| Color | [NSColor](../../appkit/nscolor.md), [CIColor](https://developer.apple.com/documentation/coreimage/cicolor), or `CGColor` object |
| Image | [NSImage](../../appkit/nsimage.md), [NSBitmapImageRep](../../appkit/nsbitmapimagerep.md), `CGImage` object, [CIImage](https://developer.apple.com/documentation/coreimage/ciimage), `CVPixelBuffer` object, `CVOpenGLBuffer` object, or an opaque `QCImage` (that is, an optimized abstract image object only to be used with `setValue:forInputKey:` of another `<QCCompositionRenderer>`) |
| Structure | [NSArray](https://developer.apple.com/documentation/foundation/nsarray) or [NSDictionary](https://developer.apple.com/documentation/foundation/nsdictionary) |

## See Also

### Passing and Retrieving Values From a Composition

- [setValue(\_:forInputKey:)](setvalue%28__forinputkey_%29.md): Deprecated. Sets the value for an input port of a composition.
- [value(forInputKey:)](value%28forinputkey_%29.md): Deprecated. Returns the value for an input port of a composition.
- [value(forOutputKey:)](value%28foroutputkey_%29.md): Deprecated. Returns the value for an output port of a composition.

# valueForOutputKey:ofType: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the current value on an output port (identified by its key) of the root patch of the composition.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (id) valueForOutputKey:(NSString *) key ofType:(NSString *) type;
```

## Parameters

- `key`: The key associated with an output port for the root patch of a composition. This method throws an exception if `key` is invalid.
- `type`: A string that specifies the class.

<a id="return-value"></a>

## Return Value

The value.

<a id="Discussion"></a>

## Discussion

The value type depends on the type of the port type, as shown in the following table

| Port type | Value type |
| --- | --- |
| Boolean, Index, or Number | [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) or any object that responds to the methods `integerValue`, `floatValue`, or `doubleValue` |
| String | [NSString](https://developer.apple.com/documentation/foundation/nsstring) or any object that responds to the methods`stringValue` or `description` |
| Color | [NSColor](../../appkit/nscolor.md), [CIColor](https://developer.apple.com/documentation/coreimage/cicolor), or `CGColor` object |
| Image | [NSImage](../../appkit/nsimage.md), [NSBitmapImageRep](../../appkit/nsbitmapimagerep.md), `CGImage` object, [CIImage](https://developer.apple.com/documentation/coreimage/ciimage), `CVPixelBuffer` object, `CVOpenGLBuffer` object, or an opaque `QCImage` (that is, an optimized abstract image object only to be used with `setValue:forInputKey:` of another `<QCCompositionRenderer>`) |
| Structure | [NSArray](https://developer.apple.com/documentation/foundation/nsarray) or [NSDictionary](https://developer.apple.com/documentation/foundation/nsdictionary) |

## See Also

### Passing and Retrieving Values From a Composition

- [setValue:forInputKey:](setvalue%28__forinputkey_%29.md): Deprecated. Sets the value for an input port of a composition.
- [valueForInputKey:](value%28forinputkey_%29.md): Deprecated. Returns the value for an input port of a composition.
- [valueForOutputKey:](value%28foroutputkey_%29.md): Deprecated. Returns the value for an output port of a composition.
