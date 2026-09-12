> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bedownloadmonitor-9y4hu/resumemonitoring:completionhandler:](https://developer.apple.com/documentation/browserenginekit/bedownloadmonitor-9y4hu/resumemonitoring:completionhandler:)

# resumeMonitoring:completionHandler:

**Interface language:** Objective-C

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+

Informs the system that it needs to resume monitoring the download.

## Declaration

```objectivec
- (void) resumeMonitoring:(NSURL *) url completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `url`: The placeholder location your networking extension previously received when it called [beginMonitoring:](beginmonitoring_.md).
- `completionHandler`: A closure the system calls when it finishes processing the request. If it fails, the parameter is an error object that describes the failure; otherwise, it’s `nil`.

<a id="discussion"></a>

## Discussion

Call this method when your browser resumes the download after an interruption, for example, someone cancels the download, or your networking extension encounters a network error.

## See Also

### Reporting progress to the system

- [beginMonitoring:](beginmonitoring_.md): Informs the system to start monitoring the download.
