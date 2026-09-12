> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bemediaenvironment-n91a/makecapturesessionwitherror:](https://developer.apple.com/documentation/browserenginekit/bemediaenvironment-n91a/makecapturesessionwitherror:)

# makeCaptureSessionWithError:

**Interface language:** Objective-C

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Creates a new capture session in this media environment.

## Declaration

```objectivec
- (AVCaptureSession *) makeCaptureSessionWithError:(NSError **) error;
```

<a id="discussion"></a>

## Discussion

The system only allows a capture session to start when its media environment is active (see [activateWithError:](activatewitherror_.md)).
