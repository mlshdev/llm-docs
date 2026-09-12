> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptcommand/current()](https://developer.apple.com/documentation/foundation/nsscriptcommand/current())

# current() (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

If a command is being executed in the current thread by Cocoa scripting’s built-in Apple event handling, return the command.

## Declaration

```swift
class func current() -> NSScriptCommand?
```

<a id="Discussion"></a>

## Discussion

A command is being executed in the current thread by Cocoa scripting’s built-in Apple event handling if an instance of `NSScriptCommand` is handling an [execute()](execute%28%29.md) message at this instant as the result of the dispatch of an Apple event. Returns `nil` otherwise. [scriptErrorNumber](scripterrornumber.md) and [scriptErrorString](scripterrorstring.md) messages sent to the returned command object will affect the reply event sent to the sender of the event from which the command was constructed, if the sender has requested a reply.

A suspended command is not considered the current command. If a command is suspended and no other command is being executed in the current thread, [current()](current%28%29.md) returns `nil`.

# currentCommand (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

If a command is being executed in the current thread by Cocoa scripting’s built-in Apple event handling, return the command.

## Declaration

```objectivec
+ (NSScriptCommand *) currentCommand;
```

<a id="Discussion"></a>

## Discussion

A command is being executed in the current thread by Cocoa scripting’s built-in Apple event handling if an instance of `NSScriptCommand` is handling an [executeCommand](execute%28%29.md) message at this instant as the result of the dispatch of an Apple event. Returns `nil` otherwise. [scriptErrorNumber](scripterrornumber.md) and [scriptErrorString](scripterrorstring.md) messages sent to the returned command object will affect the reply event sent to the sender of the event from which the command was constructed, if the sender has requested a reply.

A suspended command is not considered the current command. If a command is suspended and no other command is being executed in the current thread, [currentCommand](current%28%29.md) returns `nil`.
