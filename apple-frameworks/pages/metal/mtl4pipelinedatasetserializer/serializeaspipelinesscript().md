> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4pipelinedatasetserializer/serializeaspipelinesscript()](https://developer.apple.com/documentation/metal/mtl4pipelinedatasetserializer/serializeaspipelinesscript())

# serializeAsPipelinesScript() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Serializes a serializer data set to a pipeline script as raw data.

## Declaration

```swift
func serializeAsPipelinesScript() throws -> Data
```

<a id="return-value"></a>

## Return Value

An `NSData` instance containing the pipeline script.

# serializeAsPipelinesScriptWithError: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Serializes a serializer data set to a pipeline script as raw data.

## Declaration

```objectivec
- (NSData *) serializeAsPipelinesScriptWithError:(NSError **) error;
```

## Parameters

- `error`: An optional parameter to store information in case of an error.

<a id="return-value"></a>

## Return Value

An `NSData` instance containing the pipeline script. On failure, this method returns `nil`.
