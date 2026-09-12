> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrovencavityoperationalstateclusteroperationalcommandresponseparams/init(responsevalue:)](https://developer.apple.com/documentation/matter/mtrovencavityoperationalstateclusteroperationalcommandresponseparams/init(responsevalue:))

# init(responseValue:) (Swift)

**Framework:** Matter  
**Kind:** Initializer  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Initialize an MTROvenCavityOperationalStateClusterOperationalCommandResponseParams with a response-value dictionary of the sort that MTRDeviceResponseHandler would receive.

## Declaration

```swift
init(responseValue: [String : Any]) throws
```

<a id="discussion"></a>

## Discussion

Will return nil and hand out an error if the response-value dictionary is not a command data response or is not the right command response.

Will return nil and hand out an error if the data response does not match the known schema for this command.

# initWithResponseValue:error: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Initialize an MTROvenCavityOperationalStateClusterOperationalCommandResponseParams with a response-value dictionary of the sort that MTRDeviceResponseHandler would receive.

## Declaration

```objectivec
- (instancetype) initWithResponseValue:(NSDictionary<NSString *,id> *) responseValue error:(NSError **) error;
```

## Parameters

- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="discussion"></a>

## Discussion

Will return nil and hand out an error if the response-value dictionary is not a command data response or is not the right command response.

Will return nil and hand out an error if the data response does not match the known schema for this command.
