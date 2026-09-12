> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstoryboardsegue/perform()](https://developer.apple.com/documentation/appkit/nsstoryboardsegue/perform())

# perform() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Performs a visual transition from one controller to another.

## Declaration

```swift
func perform()
```

<a id="Discussion"></a>

## Discussion

You can override this method in your [NSStoryboardSegue](../nsstoryboardsegue.md) subclass to perform custom animation between the starting/containing controller and the ending/contained controller for a storyboard segue. Typically, you would use Core Animation to set up an animation from one set of views to the next. For more complex animations, you might take a snapshot image of the two view hierarchies and manipulate the images instead of the view objects.

Regardless of how you perform the animation, you are responsible for installing the destination view controller o window controller (and its contained views) in the right place so that it can handle events. Typically, this entails calling one of the presentation methods in the [NSViewController](../nsviewcontroller.md) class.

## See Also

### Customizing Storyboard Segue Initialization and Invocation

- [init(identifier:source:destination:performHandler:)](init%28identifier_source_destination_performhandler_%29.md): Creates a storyboard segue and a block used when the segue is performed.
- [init(identifier:source:destination:)](init%28identifier_source_destination_%29.md): The designated initializer for a storyboard segue.

# perform (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Performs a visual transition from one controller to another.

## Declaration

```objectivec
- (void) perform;
```

<a id="Discussion"></a>

## Discussion

You can override this method in your [NSStoryboardSegue](../nsstoryboardsegue.md) subclass to perform custom animation between the starting/containing controller and the ending/contained controller for a storyboard segue. Typically, you would use Core Animation to set up an animation from one set of views to the next. For more complex animations, you might take a snapshot image of the two view hierarchies and manipulate the images instead of the view objects.

Regardless of how you perform the animation, you are responsible for installing the destination view controller o window controller (and its contained views) in the right place so that it can handle events. Typically, this entails calling one of the presentation methods in the [NSViewController](../nsviewcontroller.md) class.

## See Also

### Customizing Storyboard Segue Initialization and Invocation

- [segueWithIdentifier:source:destination:performHandler:](init%28identifier_source_destination_performhandler_%29.md): Creates a storyboard segue and a block used when the segue is performed.
- [initWithIdentifier:source:destination:](init%28identifier_source_destination_%29.md): The designated initializer for a storyboard segue.
