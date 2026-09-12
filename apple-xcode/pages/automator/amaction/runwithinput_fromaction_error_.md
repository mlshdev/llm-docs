> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amaction/runwithinput:fromaction:error:](https://developer.apple.com/documentation/automator/amaction/runwithinput:fromaction:error:)

# runWithInput:fromAction:error:

**Interface language:** Objective-C

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+ (deprecated in 10.4)

Requests the action to perform its task using the specified input from the specified action.

> Use [runWithInput:error:](run%28withinput_%29.md) instead.

## Declaration

```objectivec
- (id) runWithInput:(id) input fromAction:(AMAction *) anAction error:(NSDictionary<NSString *,id> **) errorInfo;
```

## Parameters

- `input`: The input for the receiving action. By default, actions can only accept and provide the following types. However, by overriding this method, you can change the types your action can use:

  - Objective-C actions: Accepts and provides types must inherit from `com.apple.cocoa.string`, `com.apple.cocoa.path`, `com.apple.cocoa.url`, or `com.apple.cocoa.data`.
  - Shell script actions: Accepts and provides types must inherit from `com.apple.cocoa.string` or `com.apple.cocoa.data`.
  - AppleScript actions: Accepts and provides types must inherit from `com.apple.applescript.object`.
- `anAction`: The action from which the `input` object was obtained.
- `errorInfo`: If an error occurs, the action returns an error dictionary in this parameter. The keys and values for this dictionary are:

  - `OSAScriptErrorNumber` (a string constant) — The value for this key is an instance of [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) whose integer value indicates an error code. See the header file `MacErrors.h` in the Carbon Core framework for a list of valid error codes, particularly the section on OSA errors.
  - `OSAScriptErrorMessage` (a string constant) —The value for this key is an instance of [NSString](https://developer.apple.com/documentation/foundation/nsstring) describing the error.

<a id="return-value"></a>

## Return Value

An object containing one or more objects of a data type compatible with a type specified in the receiving action’s `AMProvides` property. If the action doesn’t modify the data passed in `input`, it should return it unchanged.

<a id="Discussion"></a>

## Discussion

The input and output objects for actions are usually instances of [NSArray](https://developer.apple.com/documentation/foundation/nsarray). If the action encounters problems, it should return by indirection an error dictionary that describes the error.

This method is intended to be overridden. AppleScript actions, however, usually will not need to override this method because the same functionality is provided by an AppleScript script.

## See Also

### Deprecated

- [didFinishRunningWithError:](didfinishrunningwitherror_.md): Deprecated. Sent by the action to itself when it has finished running asynchronously.
