> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/beprocesscapability-7av05/requestwitherror:](https://developer.apple.com/documentation/browserenginekit/beprocesscapability-7av05/requestwitherror:)

# requestWithError:

**Interface language:** Objective-C

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS 14.3+

Requests a capability for the current process.

## Declaration

```objectivec
- (id<BEProcessCapabilityGrant>) requestWithError:(NSError **) error;
```

## Parameters

- `error`: A pointer to an error object that describes why the method failed, or `nil` if no error occurred. Pass `nil` to ignore the error.

<a id="discussion"></a>

## Discussion

This method returns the granted capability, if possible; otherwise, it returns `nil` and sets the argument error object.
