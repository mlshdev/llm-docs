> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intentsui/inuihostedviewcontrolling/configure(with:context:completion:)](https://developer.apple.com/documentation/intentsui/inuihostedviewcontrolling/configure(with:context:completion:))

# configure(with:context:completion:) (Swift)

**Framework:** IntentsUI  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Configures your view controller’s content.

## Declaration

```swift
optional func configure(with interaction: INInteraction, context: INUIHostedViewContext, completion: @escaping (CGSize) -> Void)
```

```swift
optional func configure(with interaction: INInteraction, context: INUIHostedViewContext) async -> CGSize
```

## Parameters

- `interaction`: The interaction object containing the intent and response objects. Use the information in this object to configure the content of your view controller’s view. For some types of interactions, only an intent object is available.
- `context`: The context in which your view controller is displayed. Use this parameter to determine whether your view controller is to be displayed in the Maps or Siri interface. You can customize your view controller accordingly for each interface.
- `completion`: The block to execute when you finish configuring your view controller. You must execute this block at some point in your implementation of this method. This block has no return value and takes the following parameter:

  - **desiredSize**: The size you want applied to the view controller’s view. Specify a value that is between the allowed minimum and maximum size, which you can get from the view controller’s associated [NSExtensionContext](../../foundation/nsextensioncontext.md) object. Specify [CGRectZero](../../coregraphics/cgrectzero.md) to hide your view controller’s content altogether.

## Mentioned In

- [Configuring the View Controller for Your Custom Interface](../../sirikit/configuring-the-view-controller-for-your-custom-interface.md)

<a id="Discussion"></a>

## Discussion

Before displaying your view controller, Siri and Maps call this method so that you can configure the contents of your view controller’s view. Use the `interaction` and `context` parameters to configure the view. When you are done, execute the provided `completion` block and specify the size for the view. The size you specify must be between the values in the [hostedViewMinimumAllowedSize](../../foundation/nsextensioncontext/hostedviewminimumallowedsize.md) and [hostedViewMaximumAllowedSize](../../foundation/nsextensioncontext/hostedviewmaximumallowedsize.md) properties of the view controller’s [NSExtensionContext](../../foundation/nsextensioncontext.md) object. Siri tries to use the size you provide but may adjust it to fit the available space.

After your view controller is onscreen, Maps may call this method additional times to deliver updated information. Each time the method is called, use the new data to update your interface. Execute the `completion` block when you are finished.

If you implement the [configureView(for:of:interactiveBehavior:context:completion:)](configureview%28for_of_interactivebehavior_context_completion_%29.md) method in your view controller, SiriKit does not call this method.

## See Also

### Configuring the View Controller

- [configureView(for:of:interactiveBehavior:context:completion:)](configureview%28for_of_interactivebehavior_context_completion_%29.md)
- [INUIInteractiveBehavior](../inuiinteractivebehavior.md): Constants indicating how users are able to interact with your interface.

# configureWithInteraction:context:completion: (Objective-C)

**Framework:** IntentsUI  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Configures your view controller’s content.

## Declaration

```objectivec
- (void) configureWithInteraction:(INInteraction *) interaction context:(INUIHostedViewContext) context completion:(void (^)(CGSize desiredSize)) completion;
```

## Parameters

- `interaction`: The interaction object containing the intent and response objects. Use the information in this object to configure the content of your view controller’s view. For some types of interactions, only an intent object is available.
- `context`: The context in which your view controller is displayed. Use this parameter to determine whether your view controller is to be displayed in the Maps or Siri interface. You can customize your view controller accordingly for each interface.
- `completion`: The block to execute when you finish configuring your view controller. You must execute this block at some point in your implementation of this method. This block has no return value and takes the following parameter:

  - **desiredSize**: The size you want applied to the view controller’s view. Specify a value that is between the allowed minimum and maximum size, which you can get from the view controller’s associated [NSExtensionContext](../../foundation/nsextensioncontext.md) object. Specify [CGRectZero](../../coregraphics/cgrectzero.md) to hide your view controller’s content altogether.

## Mentioned In

- [Configuring the View Controller for Your Custom Interface](../../sirikit/configuring-the-view-controller-for-your-custom-interface.md)

<a id="Discussion"></a>

## Discussion

Before displaying your view controller, Siri and Maps call this method so that you can configure the contents of your view controller’s view. Use the `interaction` and `context` parameters to configure the view. When you are done, execute the provided `completion` block and specify the size for the view. The size you specify must be between the values in the [hostedViewMinimumAllowedSize](../../foundation/nsextensioncontext/hostedviewminimumallowedsize.md) and [hostedViewMaximumAllowedSize](../../foundation/nsextensioncontext/hostedviewmaximumallowedsize.md) properties of the view controller’s [NSExtensionContext](../../foundation/nsextensioncontext.md) object. Siri tries to use the size you provide but may adjust it to fit the available space.

After your view controller is onscreen, Maps may call this method additional times to deliver updated information. Each time the method is called, use the new data to update your interface. Execute the `completion` block when you are finished.

If you implement the [configureViewForParameters:ofInteraction:interactiveBehavior:context:completion:](configureview%28for_of_interactivebehavior_context_completion_%29.md) method in your view controller, SiriKit does not call this method.

## See Also

### Configuring the View Controller

- [configureViewForParameters:ofInteraction:interactiveBehavior:context:completion:](configureview%28for_of_interactivebehavior_context_completion_%29.md)
- [INUIInteractiveBehavior](../inuiinteractivebehavior.md): Constants indicating how users are able to interact with your interface.
