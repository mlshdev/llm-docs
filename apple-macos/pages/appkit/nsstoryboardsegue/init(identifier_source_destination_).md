> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstoryboardsegue/init(identifier:source:destination:)](https://developer.apple.com/documentation/appkit/nsstoryboardsegue/init(identifier:source:destination:))

# init(identifier:source:destination:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.10+

The designated initializer for a storyboard segue.

## Declaration

```swift
init(identifier: NSStoryboardSegue.Identifier, source sourceController: Any, destination destinationController: Any)
```

## Parameters

- `identifier`: The unique identifier for the storyboard segue. See the [identifier](identifier-swift.property.md) property.
- `sourceController`: The starting/containing view controller or window controller for the storyboard segue.
- `destinationController`: The ending/contained view controller or window controller for the storyboard segue.

<a id="return-value"></a>

## Return Value

An initialized storyboard segue, ready to be performed.

<a id="Discussion"></a>

## Discussion

When a segue begins, the system calls this method. To run code during segue initialization, implement a storyboard segue subclass and override this method.

Whenever this method is called, the system then calls the [perform()](perform%28%29.md) method.

## See Also

### Customizing Storyboard Segue Initialization and Invocation

- [init(identifier:source:destination:performHandler:)](init%28identifier_source_destination_performhandler_%29.md): Creates a storyboard segue and a block used when the segue is performed.
- [perform()](perform%28%29.md): Performs a visual transition from one controller to another.

# initWithIdentifier:source:destination: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

The designated initializer for a storyboard segue.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSStoryboardSegueIdentifier) identifier source:(id) sourceController destination:(id) destinationController;
```

## Parameters

- `identifier`: The unique identifier for the storyboard segue. See the [identifier](identifier-swift.property.md) property.
- `sourceController`: The starting/containing view controller or window controller for the storyboard segue.
- `destinationController`: The ending/contained view controller or window controller for the storyboard segue.

<a id="return-value"></a>

## Return Value

An initialized storyboard segue, ready to be performed.

<a id="Discussion"></a>

## Discussion

When a segue begins, the system calls this method. To run code during segue initialization, implement a storyboard segue subclass and override this method.

Whenever this method is called, the system then calls the [perform](perform%28%29.md) method.

## See Also

### Customizing Storyboard Segue Initialization and Invocation

- [segueWithIdentifier:source:destination:performHandler:](init%28identifier_source_destination_performhandler_%29.md): Creates a storyboard segue and a block used when the segue is performed.
- [perform](perform%28%29.md): Performs a visual transition from one controller to another.
