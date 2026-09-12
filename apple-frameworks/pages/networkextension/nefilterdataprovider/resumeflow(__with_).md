> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterdataprovider/resumeflow(_:with:)](https://developer.apple.com/documentation/networkextension/nefilterdataprovider/resumeflow(_:with:))

# resumeFlow(\_:with:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Resumes a previously-paused flow.

## Declaration

```swift
func resumeFlow(_ flow: NEFilterFlow, with verdict: NEFilterVerdict)
```

<a id="Discussion"></a>

## Discussion

The provider calls this method to resume a flow that the provider previously paused by returning a pause verdict.

# resumeFlow:withVerdict: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Resumes a previously-paused flow.

## Declaration

```objectivec
- (void) resumeFlow:(NEFilterFlow *) flow withVerdict:(NEFilterVerdict *) verdict;
```

<a id="Discussion"></a>

## Discussion

The provider calls this method to resume a flow that the provider previously paused by returning a pause verdict.
