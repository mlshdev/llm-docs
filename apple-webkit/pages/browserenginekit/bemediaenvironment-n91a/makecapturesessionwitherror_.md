> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/browserenginekit/bemediaenvironment-n91a/makecapturesessionwitherror:

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
