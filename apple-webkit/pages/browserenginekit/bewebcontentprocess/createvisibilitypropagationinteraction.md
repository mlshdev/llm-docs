> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bewebcontentprocess/createvisibilitypropagationinteraction](https://developer.apple.com/documentation/browserenginekit/bewebcontentprocess/createvisibilitypropagationinteraction)

# createVisibilityPropagationInteraction

**Interface language:** Objective-C

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Returns an interaction that associates a view with the web content process.

## Declaration

```objectivec
- (id<UIInteraction>) createVisibilityPropagationInteraction;
```

<a id="return-value"></a>

## Return Value

An interaction that you attach to the view for which your web content process prepares content.

<a id="discussion"></a>

## Discussion

When you add a visibility propagation interaction to a view, the system treats the extension process as visible whenever the view is visible, and schedules the process as if it has visible UI. When the view isn’t visible, the system schedules the process as a background helper. If your web content extension prepares content for multiple views, create a separate visibility propagation for each view.

## See Also

### Coordinating processes

- [grantCapability:error:](grantcapability_error_.md): Grants the specified capability to the process.
- [grantCapability:error:invalidationHandler:](grantcapability_error_invalidationhandler_.md): Grants the specified capability to the process, invoking the handler when the capability becomes invalid.
