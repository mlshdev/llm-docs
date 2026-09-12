> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avpersistablecontentkeyrequest/persistablecontentkey(fromkeyvendorresponse:options:)](https://developer.apple.com/documentation/avfoundation/avpersistablecontentkeyrequest/persistablecontentkey(fromkeyvendorresponse:options:))

# persistableContentKey(fromKeyVendorResponse:options:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

Creates a persistable content key from the content key context data.

## Declaration

```swift
func persistableContentKey(fromKeyVendorResponse keyVendorResponse: Data, options: [String : Any]? = nil) throws -> Data
```

## Parameters

- `keyVendorResponse`: The response returned from the key vendor.
- `options`: Additional information required to obtain the persistable content key. The value of this parameter is `nil` when no additional information is required.

<a id="return-value"></a>

## Return Value

Returns a data object that contains the persistable content key.

# persistableContentKeyFromKeyVendorResponse:options:error: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

Creates a persistable content key from the content key context data.

## Declaration

```objectivec
- (NSData *) persistableContentKeyFromKeyVendorResponse:(NSData *) keyVendorResponse options:(NSDictionary<NSString *,id> *) options error:(NSError **) outError;
```

## Parameters

- `keyVendorResponse`: The response returned from the key vendor.
- `options`: Additional information required to obtain the persistable content key. The value of this parameter is `nil` when no additional information is required.
- `outError`: An object that contains the reason for a failure.

<a id="return-value"></a>

## Return Value

Returns a data object that contains the persistable content key.
