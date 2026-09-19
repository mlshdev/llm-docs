> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/nefilterdataprovider/handleruleschanged()

# handleRulesChanged() (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Handle a rules changed event.

## Declaration

```swift
func handleRulesChanged()
```

<a id="Discussion"></a>

## Discussion

The system calls this method when the Filter Control Provider calls the `notifyRulesChanged` method or returns a [NEFilterControlVerdict](../nefiltercontrolverdict.md) with the [updateRules()](../nefiltercontrolverdict/updaterules%28%29.md) property set to YES.

# handleRulesChanged (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Handle a rules changed event.

## Declaration

```objectivec
- (void) handleRulesChanged;
```

<a id="Discussion"></a>

## Discussion

The system calls this method when the Filter Control Provider calls the `notifyRulesChanged` method or returns a [NEFilterControlVerdict](../nefiltercontrolverdict.md) with the [updateRules](../nefiltercontrolverdict/updaterules%28%29.md) property set to YES.
