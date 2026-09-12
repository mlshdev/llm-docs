> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthenticationembeddedui/laauthenticationview/init(context:)](https://developer.apple.com/documentation/localauthenticationembeddedui/laauthenticationview/init(context:))

# init(context:) (Swift)

**Framework:** Local Authentication Embedded UI  
**Kind:** Initializer  
**Availability:** macOS 12.0+

Creates a new authentication icon that reflects the current authentication state.

## Declaration

```swift
init(context: LAContext)
```

## Parameters

- `context`: A local authentication context to associate with the icon.

<a id="discussion"></a>

## Discussion

Use this initializer to create a local authentication view and connect it to a particular local authentication context. You typically do this in the [loadView()](https://developer.apple.com/documentation/appkit/nsviewcontroller/loadview%28%29) method of an [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller) subclass. You then add this view as a subview — along with any text, imagery, and interactive elements that you need — to create a custom authentication interface. When your interface appears, call the [LAContext](../../localauthentication/lacontext.md) instance’s [evaluatePolicy(\_:localizedReason:reply:)](../../localauthentication/lacontext/evaluatepolicy%28__localizedreason_reply_%29.md) method to begin the authentication process.

## See Also

### Creating a local authentication view

- [context](context.md): The local authentication context associated with the authentication view.

# initWithContext: (Objective-C)

**Framework:** Local Authentication Embedded UI  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Creates a new authentication icon that reflects the current authentication state.

## Declaration

```objectivec
- (instancetype) initWithContext:(LAContext *) context;
```

## Parameters

- `context`: A local authentication context to associate with the icon.

<a id="discussion"></a>

## Discussion

Use this initializer to create a local authentication view and connect it to a particular local authentication context. You typically do this in the [loadView](https://developer.apple.com/documentation/appkit/nsviewcontroller/loadview%28%29) method of an [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller) subclass. You then add this view as a subview — along with any text, imagery, and interactive elements that you need — to create a custom authentication interface. When your interface appears, call the [LAContext](../../localauthentication/lacontext.md) instance’s [evaluatePolicy:localizedReason:reply:](../../localauthentication/lacontext/evaluatepolicy%28__localizedreason_reply_%29.md) method to begin the authentication process.

## See Also

### Creating a local authentication view

- [context](context.md): The local authentication context associated with the authentication view.
