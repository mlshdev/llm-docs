> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/restrictedsandboxrevision/revision1](https://developer.apple.com/documentation/browserenginekit/restrictedsandboxrevision/revision1)

# RestrictedSandboxRevision.revision1

**Framework:** BrowserEngineKit  
**Kind:** Case  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS 14.3+

First revision of the restricted sandbox rules.

## Declaration

```swift
case revision1
```

<a id="discussion"></a>

## Discussion

You can apply this revision to any of your app’s extensions but the system only enforces its restrictions for the web content extension.

For more information, see [Limiting resource access in web content extensions](../limiting-resource-access-in-content-extensions.md).

## See Also

### Sandbox restriction revisions

- [RestrictedSandboxRevision.revision2](revision2.md): Second revision of the restricted sandbox rules.
