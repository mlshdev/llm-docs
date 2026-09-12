> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_autorelease_frequency_t/dispatch_autorelease_frequency_never](https://developer.apple.com/documentation/dispatch/dispatch_autorelease_frequency_t/dispatch_autorelease_frequency_never)

# DISPATCH_AUTORELEASE_FREQUENCY_NEVER

**Interface language:** Objective-C

**Framework:** Dispatch  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The queue does not set up an autorelease pool around executed blocks.

## Declaration

```objectivec
DISPATCH_AUTORELEASE_FREQUENCY_NEVER
```

<a id="Discussion"></a>

## Discussion

This option is the default behavior for the system-defined global queues.

## See Also

### Autorelease Frequency Options

- [DISPATCH_AUTORELEASE_FREQUENCY_INHERIT](dispatch_autorelease_frequency_inherit.md): The queue inherits its autorelease frequency from its target queue.
- [DISPATCH_AUTORELEASE_FREQUENCY_WORK_ITEM](dispatch_autorelease_frequency_work_item.md): The queue configures an autorelease pool before the execution of a block and releases the objects in that pool after the block finishes executing.
