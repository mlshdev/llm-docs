> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/beprocesscapability-7av05/suspendwitherror:](https://developer.apple.com/documentation/browserenginekit/beprocesscapability-7av05/suspendwitherror:)

# suspendWithError:

**Interface language:** Objective-C

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Suspends the capability.

## Declaration

```objectivec
- (BOOL) suspendWithError:(NSError **) error;
```

## Parameters

- `error`: On failure, populated with an error if the capability cannot be suspended.

<a id="return-value"></a>

## Return Value

`YES` if the capability was suspended, or `NO` if an error occurred.
