> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstoryboardsegue/init(identifier:source:destination:performhandler:)](https://developer.apple.com/documentation/appkit/nsstoryboardsegue/init(identifier:source:destination:performhandler:))

# init(identifier:source:destination:performHandler:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.10+

Creates a storyboard segue and a block used when the segue is performed.

## Declaration

```swift
convenience init(identifier: NSStoryboardSegue.Identifier, source sourceController: Any, destination destinationController: Any, performHandler: @escaping () -> Void)
```

## Parameters

- `identifier`: The unique identifier for the storyboard segue. See the [identifier](identifier-swift.property.md) property.
- `sourceController`: The starting/containing view controller or window controller for the storyboard segue.
- `destinationController`: The ending/contained view controller or window controller for the storyboard segue.
- `performHandler`: A block of code that you provide, to be run each time the system calls the [perform()](perform%28%29.md) method.

<a id="return-value"></a>

## Return Value

An initialized storyboard segue and code block, ready to be performed.

<a id="Discussion"></a>

## Discussion

You can use this method to customize a storyboard segue in lieu of creating a subclass.

## See Also

### Customizing Storyboard Segue Initialization and Invocation

- [init(identifier:source:destination:)](init%28identifier_source_destination_%29.md): The designated initializer for a storyboard segue.
- [perform()](perform%28%29.md): Performs a visual transition from one controller to another.

# segueWithIdentifier:source:destination:performHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.10+

Creates a storyboard segue and a block used when the segue is performed.

## Declaration

```objectivec
+ (instancetype) segueWithIdentifier:(NSStoryboardSegueIdentifier) identifier source:(id) sourceController destination:(id) destinationController performHandler:(void (^)()) performHandler;
```

## Parameters

- `identifier`: The unique identifier for the storyboard segue. See the [identifier](identifier-swift.property.md) property.
- `sourceController`: The starting/containing view controller or window controller for the storyboard segue.
- `destinationController`: The ending/contained view controller or window controller for the storyboard segue.
- `performHandler`: A block of code that you provide, to be run each time the system calls the [perform](perform%28%29.md) method.

<a id="return-value"></a>

## Return Value

An initialized storyboard segue and code block, ready to be performed.

<a id="Discussion"></a>

## Discussion

You can use this method to customize a storyboard segue in lieu of creating a subclass.

## See Also

### Customizing Storyboard Segue Initialization and Invocation

- [initWithIdentifier:source:destination:](init%28identifier_source_destination_%29.md): The designated initializer for a storyboard segue.
- [perform](perform%28%29.md): Performs a visual transition from one controller to another.
