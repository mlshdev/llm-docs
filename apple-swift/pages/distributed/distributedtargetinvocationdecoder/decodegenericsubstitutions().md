> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/distributed/distributedtargetinvocationdecoder/decodegenericsubstitutions()](https://developer.apple.com/documentation/distributed/distributedtargetinvocationdecoder/decodegenericsubstitutions())

# decodeGenericSubstitutions()

**Framework:** Distributed  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Decode all generic substitutions that were recorded for this invocation.

## Declaration

```swift
mutating func decodeGenericSubstitutions() throws -> [any Any.Type]
```

<a id="return-value"></a>

## Return Value

Array of all generic substitutions necessary to execute this invocation target.

<a id="discussion"></a>

## Discussion

The values retrieved from here must be in the same order as they were recorded by [recordGenericSubstitution(\_:)](../distributedtargetinvocationencoder/recordgenericsubstitution%28__%29.md).

> **Throws**

> If decoding substitutions fails.
