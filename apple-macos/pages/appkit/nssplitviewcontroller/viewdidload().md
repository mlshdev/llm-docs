> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nssplitviewcontroller/viewdidload()

# viewDidLoad() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Configures the split view controller after its view loads into memory.

## Declaration

```swift
func viewDidLoad()
```

<a id="Discussion"></a>

## Discussion

[NSSplitViewController](../nssplitviewcontroller.md) overrides this method from its parent class, [NSViewController](../nsviewcontroller.md). If you override this method in a subclass, you must call `super`.

# viewDidLoad (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Configures the split view controller after its view loads into memory.

## Declaration

```objectivec
- (void) viewDidLoad;
```

<a id="Discussion"></a>

## Discussion

[NSSplitViewController](../nssplitviewcontroller.md) overrides this method from its parent class, [NSViewController](../nsviewcontroller.md). If you override this method in a subclass, you must call `super`.
