> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-4b4w9/initwithconfiguration:](https://developer.apple.com/documentation/cloudkit/cksyncengine-4b4w9/initwithconfiguration:)

# initWithConfiguration:

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a sync engine with the specified configuration.

## Declaration

```objectivec
- (instancetype) initWithConfiguration:(CKSyncEngineConfiguration *) configuration;
```

## Parameters

- `configuration`: The attributes of the new sync engine, such as the associated database and the object to use as the engine’s delegate. For more information, see [CKSyncEngineConfiguration](../cksyncengineconfiguration.md).

<a id="return-value"></a>

## Return Value

A configured sync engine.

## See Also

### Creating a sync engine

- [CKSyncEngineConfiguration](../cksyncengineconfiguration.md): A type that configures the attributes and behavior of a sync engine.
