> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/beprocesscapabilitygrant/invalidate](https://developer.apple.com/documentation/browserenginekit/beprocesscapabilitygrant/invalidate)

# invalidate

**Interface language:** Objective-C

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS 14.3+

Revokes access to a capability.

## Declaration

```objectivec
- (BOOL) invalidate;
```

<a id="discussion"></a>

## Discussion

This method invalidates a grant and removes the capability from the process.

## See Also

### Testing and changing validity

- [valid](valid.md): A Boolean value that indicates whether the system grants the capability.
