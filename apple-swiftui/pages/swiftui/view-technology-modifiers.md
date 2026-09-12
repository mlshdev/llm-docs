> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view-technology-modifiers](https://developer.apple.com/documentation/swiftui/view-technology-modifiers)

# Technology-specific modifiers

**Framework:** SwiftUI  
**Kind:** API Collection

Add modifiers to customize SwiftUI views that other Apple frameworks provide.

<a id="Overview"></a>

## Overview

Configure and customize SwiftUI views that you integrate from other Apple frameworks, such as web views from [WebKit](https://developer.apple.com/documentation/webkit) or maps from [MapKit](https://developer.apple.com/documentation/mapkit), with these modifiers.

For more information, see [Technology-specific views](technology-specific-views.md).

## Topics

### Displaying web content

- [WebView](https://developer.apple.com/documentation/webkit/webview-swift.struct): A view that displays some web content.
- [WebPage](https://developer.apple.com/documentation/webkit/webpage): An object that controls and manages the behavior of interactive web content.
- [onWebViewImmersiveEnvironmentRequest(shouldAllow:present:dismiss:)](view/onwebviewimmersiveenvironmentrequest%28shouldallow_present_dismiss_%29.md): Manages the lifecycle of immersive environments requested by websites.
- [webViewBackForwardNavigationGestures(\_:)](view/webviewbackforwardnavigationgestures%28__%29.md): Determines whether horizontal swipe gestures trigger backward and forward page navigation.
- [webViewContentBackground(\_:)](view/webviewcontentbackground%28__%29.md): Specifies the visibility of the webpage’s natural background color within this view.
- [webViewContextMenu(menu:)](view/webviewcontextmenu%28menu_%29.md): Adds an item-based context menu to a WebView, replacing the default set of context menu items.
- [webViewElementFullscreenBehavior(\_:)](view/webviewelementfullscreenbehavior%28__%29.md): Determines whether a web view can display content full screen.
- [webViewLinkPreviews(\_:)](view/webviewlinkpreviews%28__%29.md): Determines whether pressing a link displays a preview of the destination for the link.
- [webViewMagnificationGestures(\_:)](view/webviewmagnificationgestures%28__%29.md): Determines whether magnify gestures change the view’s magnification.
- [webViewOnScrollGeometryChange(for:of:action:)](view/webviewonscrollgeometrychange%28for_of_action_%29.md): Adds an action to be performed when a value, created from a scroll geometry, changes.
- [webViewScrollInputBehavior(\_:for:)](view/webviewscrollinputbehavior%28__for_%29.md): Enables or disables scrolling in web views when using particular inputs.
- [webViewScrollPosition(\_:)](view/webviewscrollposition%28__%29.md): Associates a binding to a scroll position with the web view.
- [webViewTextSelection(\_:)](view/webviewtextselection%28__%29.md): Determines whether to allow people to select or otherwise interact with text.

### Accessing Apple Pay and Wallet

- [PayWithApplePayButton](https://developer.apple.com/documentation/passkit/paywithapplepaybutton): A type that provides a button to pay with Apple pay.
- [AddPassToWalletButton](https://developer.apple.com/documentation/passkit/addpasstowalletbutton): A type that provides a button that enables people to add a new or existing pass to Apple Wallet.
- [VerifyIdentityWithWalletButton](https://developer.apple.com/documentation/passkit/verifyidentitywithwalletbutton): A type that displays a button to present the identity verification flow.
- [addOrderToWalletButtonStyle(\_:)](view/addordertowalletbuttonstyle%28__%29.md): Sets the button’s style.
- [addPassToWalletButtonStyle(\_:)](view/addpasstowalletbuttonstyle%28__%29.md): Sets the style to be used by the button. (see `PKAddPassButtonStyle`).
- [onApplePayCouponCodeChange(perform:)](view/onapplepaycouponcodechange%28perform_%29.md): Called when a user has entered or updated a coupon code. This is required if the user is being asked to provide a coupon code.
- [onApplePayPaymentMethodChange(perform:)](view/onapplepaypaymentmethodchange%28perform_%29.md): Called when a payment method has changed and asks for an update payment request. If this modifier isn’t provided Wallet will assume the payment method is valid.
- [onApplePayShippingContactChange(perform:)](view/onapplepayshippingcontactchange%28perform_%29.md): Called when a user selected a shipping address. This is required if the user is being asked to provide a shipping contact.
- [onApplePayShippingMethodChange(perform:)](view/onapplepayshippingmethodchange%28perform_%29.md): Called when a user selected a shipping method. This is required if the user is being asked to provide a shipping method.
- [payLaterViewAction(\_:)](view/paylaterviewaction%28__%29.md): Sets the action on the PayLaterView. See `PKPayLaterAction`.
- [payLaterViewDisplayStyle(\_:)](view/paylaterviewdisplaystyle%28__%29.md): Sets the display style on the PayLaterView. See `PKPayLaterDisplayStyle`.
- [payWithApplePayButtonDisableCardArt()](view/paywithapplepaybuttondisablecardart%28%29.md): Sets the features that should be allowed to show on the payment buttons.
- [payWithApplePayButtonStyle(\_:)](view/paywithapplepaybuttonstyle%28__%29.md): Sets the style to be used by the button. (see `PayWithApplePayButtonStyle`).
- [verifyIdentityWithWalletButtonStyle(\_:)](view/verifyidentitywithwalletbuttonstyle%28__%29.md): Sets the style to be used by the button. (see `PKIdentityButtonStyle`).
- [AsyncShareablePassConfiguration](https://developer.apple.com/documentation/passkit/asyncshareablepassconfiguration)
- [transactionTask(\_:action:)](view/transactiontask%28__action_%29.md): Provides a task to perform before this view appears

### Authorizing and authenticating

- [LocalAuthenticationView](https://developer.apple.com/documentation/localauthentication/localauthenticationview): A SwiftUI view that displays an authentication interface.
- [SignInWithAppleButton](https://developer.apple.com/documentation/authenticationservices/signinwithapplebutton): A SwiftUI view that creates the Sign in with Apple button for display.
- [signInWithAppleButtonStyle(\_:)](view/signinwithapplebuttonstyle%28__%29.md): Sets the style used for displaying the control (see `SignInWithAppleButton.Style`).
- [authorizationController](environmentvalues/authorizationcontroller.md): A value provided in the SwiftUI environment that views can use to perform authorization requests.
- [webAuthenticationSession](environmentvalues/webauthenticationsession.md): A value provided in the SwiftUI environment that views can use to authenticate a user through a web service.

### Configuring Family Sharing

- [FamilyActivityPicker](https://developer.apple.com/documentation/familycontrols/familyactivitypicker): A view in which users specify applications, web domains, and categories without revealing their choices to the app.
- [familyActivityPicker(isPresented:selection:)](view/familyactivitypicker%28ispresented_selection_%29.md): Presents an activity picker view as a sheet.
- [familyActivityPicker(headerText:footerText:isPresented:selection:)](view/familyactivitypicker%28headertext_footertext_ispresented_selection_%29.md): Presents an activity picker view as a sheet.
- [familyActivityPicker(title:headerText:footerText:isPresented:selection:)](view/familyactivitypicker%28title_headertext_footertext_ispresented_selection_%29.md): Present an activity picker sheet for selecting apps and websites to manage.

### Reporting on device activity

- [DeviceActivityReport](https://developer.apple.com/documentation/deviceactivity/deviceactivityreport): A view that reports the user’s application, category, and web domain activity in a privacy-preserving way.

### Working with managed devices

- [managedContentStyle(\_:)](view/managedcontentstyle%28__%29.md): Applies a managed content style to the view.
- [automatedDeviceEnrollmentAddition(isPresented:)](view/automateddeviceenrollmentaddition%28ispresented_%29.md): Presents a modal view that enables users to add devices to their organization.

### Creating graphics

- [Chart](https://developer.apple.com/documentation/charts/chart): A SwiftUI view that displays a chart.
- [SceneView](https://developer.apple.com/documentation/scenekit/sceneview): Deprecated. A SwiftUI view for displaying 3D SceneKit content.
- [SpriteView](https://developer.apple.com/documentation/spritekit/spriteview): A SwiftUI view that renders a SpriteKit scene.

### Getting location information

- [LocationButton](https://developer.apple.com/documentation/corelocationui/locationbutton): A SwiftUI button that grants one-time location authorization.
- [Map](https://developer.apple.com/documentation/mapkit/map): A view that displays an embedded map interface.
- [mapStyle(\_:)](view/mapstyle%28__%29.md): Specifies the map style to be used.
- [mapScope(\_:)](view/mapscope%28__%29.md): Creates a mapScope that SwiftUI uses to connect map controls to an associated map.
- [mapFeatureSelectionDisabled(\_:)](view/mapfeatureselectiondisabled%28__%29.md): Specifies which map features should have selection disabled.
- [mapFeatureSelectionAccessory(\_:)](view/mapfeatureselectionaccessory%28__%29.md): Specifies the selection accessory to display for a `MapFeature`
- [mapFeatureSelectionContent(content:)](view/mapfeatureselectioncontent%28content_%29.md): Specifies a custom presentation for the currently selected feature.
- [mapControls(\_:)](view/mapcontrols%28__%29.md): Configures all `Map` views in the associated environment to have standard size and position controls
- [mapControlVisibility(\_:)](view/mapcontrolvisibility%28__%29.md): Configures all Map controls in the environment to have the specified visibility
- [mapCameraKeyframeAnimator(trigger:keyframes:)](view/mapcamerakeyframeanimator%28trigger_keyframes_%29.md): Uses the given keyframes to animate the camera of a `Map` when the given trigger value changes.
- [lookAroundViewer(isPresented:scene:allowsNavigation:showsRoadLabels:pointsOfInterest:onDismiss:)](view/lookaroundviewer%28ispresented_scene_allowsnavigation_showsroadlabels_pointsofinterest_ondismiss_%29.md)
- [lookAroundViewer(isPresented:initialScene:allowsNavigation:showsRoadLabels:pointsOfInterest:onDismiss:)](view/lookaroundviewer%28ispresented_initialscene_allowsnavigation_showsroadlabels_pointsofinterest_ondismiss_%29.md)
- [onMapCameraChange(frequency:\_:)](view/onmapcamerachange%28frequency___%29.md): Performs an action when Map camera framing changes
- [mapItemDetailPopover(isPresented:item:displaysMap:attachmentAnchor:)](view/mapitemdetailpopover%28ispresented_item_displaysmap_attachmentanchor_%29.md): Presents a map item detail popover.
- [mapItemDetailPopover(isPresented:item:displaysMap:attachmentAnchor:arrowEdge:)](view/mapitemdetailpopover%28ispresented_item_displaysmap_attachmentanchor_arrowedge_%29.md): Presents a map item detail popover.
- [mapItemDetailPopover(item:displaysMap:attachmentAnchor:)](view/mapitemdetailpopover%28item_displaysmap_attachmentanchor_%29.md): Presents a map item detail popover.
- [mapItemDetailPopover(item:displaysMap:attachmentAnchor:arrowEdge:)](view/mapitemdetailpopover%28item_displaysmap_attachmentanchor_arrowedge_%29.md): Presents a map item detail popover.
- [mapItemDetailSheet(isPresented:item:displaysMap:)](view/mapitemdetailsheet%28ispresented_item_displaysmap_%29.md): Presents a map item detail sheet.
- [mapItemDetailSheet(item:displaysMap:)](view/mapitemdetailsheet%28item_displaysmap_%29.md): Presents a map item detail sheet.

### Displaying media

- [CameraView](https://developer.apple.com/documentation/homekit/cameraview): A SwiftUI view into which a video stream or an image snapshot is rendered.
- [NowPlayingView](https://developer.apple.com/documentation/watchkit/nowplayingview): A view that displays the system’s Now Playing interface so that the user can control audio.
- [VideoPlayer](https://developer.apple.com/documentation/avkit/videoplayer): A view that displays content from a player and a native user interface to control playback.
- [continuityDevicePicker(isPresented:onDidConnect:)](view/continuitydevicepicker%28ispresented_ondidconnect_%29.md): A `continuityDevicePicker` should be used to discover and connect nearby continuity device through a button interface or other form of activation. On tvOS, this presents a fullscreen continuity device picker experience when selected. The modal view covers as much the screen of `self` as possible when a given condition is true.
- [cameraAnchor(isActive:)](view/cameraanchor%28isactive_%29.md): Specifies the view that should act as the virtual camera for Apple Vision Pro 2D Persona stream.
- [foveatedStreamingPauseSheet(session:)](view/foveatedstreamingpausesheet%28session_%29.md): Tells the system to present a sheet with controls for resuming or ending the foveated streaming session when it pauses.

### Supporting Group Activities

- [groupActivityAssociation(\_:)](view/groupactivityassociation%28__%29.md): Specifies how a view should be associated with the current SharePlay group activity.

### Selecting photos

- [PhotosPicker](https://developer.apple.com/documentation/photosui/photospicker): A view that displays a Photos picker for choosing assets from the photo library.
- [photosPicker(isPresented:selection:matching:preferredItemEncoding:)](view/photospicker%28ispresented_selection_matching_preferreditemencoding_%29.md): Presents a Photos picker that selects a `PhotosPickerItem`.
- [photosPicker(isPresented:selection:matching:preferredItemEncoding:photoLibrary:)](view/photospicker%28ispresented_selection_matching_preferreditemencoding_photolibrary_%29.md): Presents a Photos picker that selects a `PhotosPickerItem` from a given photo library.
- [photosPicker(isPresented:selection:maxSelectionCount:selectionBehavior:matching:preferredItemEncoding:)](view/photospicker%28ispresented_selection_maxselectioncount_selectionbehavior_matching_preferreditemencoding_%29.md): Presents a Photos picker that selects a collection of `PhotosPickerItem`.
- [photosPicker(isPresented:selection:maxSelectionCount:selectionBehavior:matching:preferredItemEncoding:photoLibrary:)](view/photospicker%28ispresented_selection_maxselectioncount_selectionbehavior_matching_preferreditemencoding_photolibrary_%29.md): Presents a Photos picker that selects a collection of `PhotosPickerItem` from a given photo library.
- [photosPickerAccessoryVisibility(\_:edges:)](view/photospickeraccessoryvisibility%28__edges_%29.md): Sets the accessory visibility of the Photos picker. Accessories include anything between the content and the edge, like the navigation bar or the sidebar.
- [photosPickerDisabledCapabilities(\_:)](view/photospickerdisabledcapabilities%28__%29.md): Disables capabilities of the Photos picker.
- [photosPickerSearchText(\_:)](view/photospickersearchtext%28__%29.md): Sets search text of the Photos picker.
- [photosPickerStyle(\_:)](view/photospickerstyle%28__%29.md): Sets the mode of the Photos picker.
- [photosPickerMetadataOptions(\_:)](view/photospickermetadataoptions%28__%29.md): Sets metadata options for the Photos picker.
- [photosSharedAlbumCreationSheet(isPresented:defaultTitle:defaultSharingPolicy:photoLibrary:onCompletion:)](view/photossharedalbumcreationsheet%28ispresented_defaulttitle_defaultsharingpolicy_photolibrary_oncompletion_%29.md): Presents a view for allowing the user to create a new shared album.
- [photosSharedAlbumCustomizationSheet(isPresented:albumIdentifier:photoLibrary:onCompletion:)](view/photossharedalbumcustomizationsheet%28ispresented_albumidentifier_photolibrary_oncompletion_%29.md): Presents a view for allowing the user to customize a specified shared album.
- [photosSharedAlbumPostingSheet(isPresented:items:defaultAlbumIdentifier:photoLibrary:completion:)](view/photossharedalbumpostingsheet%28ispresented_items_defaultalbumidentifier_photolibrary_completion_%29.md): Presents an “Add to Shared Album” sheet that allows the user to post the given items to a shared album.

### Generating images

- [imagePlaygroundGenerationStyle(\_:in:)](view/imageplaygroundgenerationstyle%28__in_%29.md): Sets the selected and allowed styles to use when displaying the image generation sheet.
- [imagePlaygroundOptions(\_:)](view/imageplaygroundoptions%28__%29.md): Sets the options to use when generating an image.
- [imagePlaygroundSheet(isPresented:concept:sourceImage:onCompletion:onCancellation:)](view/imageplaygroundsheet%28ispresented_concept_sourceimage_oncompletion_oncancellation_%29.md): Presents the system sheet to create an image using the specified string and optional starting image.
- [imagePlaygroundSheet(isPresented:concept:sourceImage:onCompletion:onAdaptiveImageGlyphCreation:onCancellation:)](view/imageplaygroundsheet%28ispresented_concept_sourceimage_oncompletion_onadaptiveimageglyphcreation_oncancellation_%29.md): Presents the system sheet to create images from the specified input.
- [imagePlaygroundSheet(isPresented:concept:sourceImageURL:onCompletion:onCancellation:)](view/imageplaygroundsheet%28ispresented_concept_sourceimageurl_oncompletion_oncancellation_%29.md): Presents the system sheet to create an image using the specified string and image URL.
- [imagePlaygroundSheet(isPresented:concept:sourceImageURL:onCompletion:onAdaptiveImageGlyphCreation:onCancellation:)](view/imageplaygroundsheet%28ispresented_concept_sourceimageurl_oncompletion_onadaptiveimageglyphcreation_oncancellation_%29.md): Presents the system sheet to create an image or Genmoji using the specified string and image URL.
- [imagePlaygroundSheet(isPresented:concepts:sourceImage:onCompletion:onCancellation:)](view/imageplaygroundsheet%28ispresented_concepts_sourceimage_oncompletion_oncancellation_%29.md): Presents the system sheet to create an image using one or more concepts and an optional starting image.
- [imagePlaygroundSheet(isPresented:concepts:sourceImage:onCompletion:onAdaptiveImageGlyphCreation:onCancellation:)](view/imageplaygroundsheet%28ispresented_concepts_sourceimage_oncompletion_onadaptiveimageglyphcreation_oncancellation_%29.md): Presents the system sheet to create an image or Genmoji using one or more concepts and an optional starting image.
- [imagePlaygroundSheet(isPresented:concepts:sourceImageURL:onCompletion:onCancellation:)](view/imageplaygroundsheet%28ispresented_concepts_sourceimageurl_oncompletion_oncancellation_%29.md): Presents the system sheet to create an image using one or more concepts and an image URL.
- [imagePlaygroundSheet(isPresented:concepts:sourceImageURL:onCompletion:onAdaptiveImageGlyphCreation:onCancellation:)](view/imageplaygroundsheet%28ispresented_concepts_sourceimageurl_oncompletion_onadaptiveimageglyphcreation_oncancellation_%29.md): Presents the system sheet to create an image or Genmoji using one or more concepts and an image URL.

### Previewing content

- [quickLookPreview(\_:)](view/quicklookpreview%28__%29.md): Presents a Quick Look preview of the contents of a single URL.
- [quickLookPreview(\_:in:)](view/quicklookpreview%28__in_%29.md): Presents a Quick Look preview of the URLs you provide.

### Interacting with networked devices

- [DevicePicker](https://developer.apple.com/documentation/devicediscoveryui/devicepicker): A SwiftUI view that displays other devices on the network, and creates an encrypted connection to a copy of your app running on that device.
- [devicePickerSupports](environmentvalues/devicepickersupports.md): Checks for support to present a DevicePicker.

### Configuring a Live Activity

- [activitySystemActionForegroundColor(\_:)](view/activitysystemactionforegroundcolor%28__%29.md): The text color for the auxiliary action button that the system shows next to a Live Activity on the Lock Screen.
- [activityBackgroundTint(\_:)](view/activitybackgroundtint%28__%29.md): Sets the tint color for the background of a Live Activity that appears on the Lock Screen.
- [isActivityFullscreen](environmentvalues/isactivityfullscreen.md): A Boolean value that indicates whether the Live Activity appears in a full-screen presentation.
- [activityFamily](environmentvalues/activityfamily.md): The size family of the current Live Activity.

### Interacting with the App Store and Apple Music

- [appStoreOverlay(isPresented:configuration:)](view/appstoreoverlay%28ispresented_configuration_%29.md): Presents a StoreKit overlay when a given condition is true.
- [manageSubscriptionsSheet(isPresented:)](view/managesubscriptionssheet%28ispresented_%29.md)
- [refundRequestSheet(for:isPresented:onDismiss:)](view/refundrequestsheet%28for_ispresented_ondismiss_%29.md): Display the refund request sheet for the given transaction.
- [offerCodeRedemption(options:isPresented:onCompletion:)](view/offercoderedemption%28options_ispresented_oncompletion_%29.md): Presents a sheet that enables customers to redeem offer codes that you configure in App Store Connect.
- [musicPicker(isPresented:title:selection:)](view/musicpicker%28ispresented_title_selection_%29.md): Presents a music picker to select items from the Apple Music catalog and the user’s music library.
- [musicSubscriptionOffer(isPresented:options:onLoadCompletion:)](view/musicsubscriptionoffer%28ispresented_options_onloadcompletion_%29.md): Initiates the process of presenting a sheet with subscription offers for Apple Music when the `isPresented` binding is `true`.
- [currentEntitlementTask(for:priority:action:)](view/currententitlementtask%28for_priority_action_%29.md): Declares the view as dependent on the entitlement of an In-App Purchase product, and returns a modified view.
- [inAppPurchaseOptions(\_:)](view/inapppurchaseoptions%28__%29.md): Add a function to call before initiating a purchase from StoreKit view within this view, providing a set of options for the purchase.
- [manageSubscriptionsSheet(isPresented:subscriptionGroupID:)](view/managesubscriptionssheet%28ispresented_subscriptiongroupid_%29.md)
- [onInAppPurchaseCompletion(perform:)](view/oninapppurchasecompletion%28perform_%29.md): Add an action to perform when a purchase initiated from a StoreKit view within this view completes.
- [onInAppPurchaseStart(perform:)](view/oninapppurchasestart%28perform_%29.md): Add an action to perform when a user triggers the purchase button on a StoreKit view within this view.
- [productIconBorder()](view/producticonborder%28%29.md): Adds a standard border to an in-app purchase product’s icon .
- [productViewStyle(\_:)](view/productviewstyle%28__%29.md): Sets the style for In-App Purchase product views within a view.
- [productDescription(\_:)](view/productdescription%28__%29.md): Configure the visibility of labels displaying an in-app purchase product description within the view.
- [storeButton(\_:for:)](view/storebutton%28__for_%29.md): Specifies the visibility of auxiliary buttons that store view and subscription store view instances may use.
- [storeProductTask(for:priority:action:)](view/storeproducttask%28for_priority_action_%29.md): Declares the view as dependent on an In-App Purchase product and returns a modified view.
- [storeProductsTask(for:priority:action:)](view/storeproductstask%28for_priority_action_%29.md): Declares the view as dependent on a collection of In-App Purchase products and returns a modified view.
- [subscriptionStatusTask(for:priority:action:)](view/subscriptionstatustask%28for_priority_action_%29.md): Declares the view as dependent on the status of an auto-renewable subscription group, and returns a modified view.
- [subscriptionStoreButtonLabel(\_:)](view/subscriptionstorebuttonlabel%28__%29.md): Configures subscription store view instances within a view to use the provided button label.
- [subscriptionStoreControlIcon(icon:)](view/subscriptionstorecontrolicon%28icon_%29.md): Sets a view to use to decorate individual subscription options within a subscription store view.
- [subscriptionStoreControlStyle(\_:)](view/subscriptionstorecontrolstyle%28__%29.md): Sets the control style for subscription store views within a view.
- [subscriptionStoreControlStyle(\_:placement:)](view/subscriptionstorecontrolstyle%28__placement_%29.md): Sets the control style and control placement for subscription store views within a view.
- [subscriptionStoreOptionGroupStyle(\_:)](view/subscriptionstoreoptiongroupstyle%28__%29.md): Sets the style subscription store views within this view use to display groups of subscription options.
- [subscriptionStorePickerItemBackground(\_:)](view/subscriptionstorepickeritembackground%28__%29.md): Sets the background style for picker items of the subscription store view instances within a view.
- [subscriptionStorePickerItemBackground(\_:in:)](view/subscriptionstorepickeritembackground%28__in_%29.md): Sets the background shape and style for subscription store view picker items within a view.
- [subscriptionStorePolicyDestination(for:destination:)](view/subscriptionstorepolicydestination%28for_destination_%29.md): Configures a view as the destination for a policy button action in subscription store views.
- [subscriptionStorePolicyDestination(url:for:)](view/subscriptionstorepolicydestination%28url_for_%29.md): Configures a URL as the destination for a policy button action in subscription store views.
- [subscriptionStorePolicyForegroundStyle(\_:)](view/subscriptionstorepolicyforegroundstyle%28__%29.md): Sets the style for the terms of service and privacy policy buttons within a subscription store view.
- [subscriptionStorePolicyForegroundStyle(\_:\_:)](view/subscriptionstorepolicyforegroundstyle%28____%29.md): Sets the primary and secondary style for the terms of service and privacy policy buttons within a subscription store view.
- [subscriptionStoreSignInAction(\_:)](view/subscriptionstoresigninaction%28__%29.md): Adds an action to perform when a person uses the sign-in button on a subscription store view within a view.
- [subscriptionStoreControlBackground(\_:)](view/subscriptionstorecontrolbackground%28__%29.md): Set a standard effect to use for the background of subscription store view controls within the view.
- [subscriptionPromotionalOffer(offer:compactJWS:)](view/subscriptionpromotionaloffer%28offer_compactjws_%29.md): Selects a promotional offer to apply to a purchase a customer makes from a subscription store view.
- [subscriptionIntroductoryOffer(applyOffer:compactJWS:)](view/subscriptionintroductoryoffer%28applyoffer_compactjws_%29.md): Selects the introductory offer eligibility preference to apply to a purchase a customer makes from a subscription store view.
- [subscriptionOfferViewButtonVisibility(\_:for:)](view/subscriptionofferviewbuttonvisibility%28__for_%29.md)
- [subscriptionOfferViewDetailAction(\_:)](view/subscriptionofferviewdetailaction%28__%29.md)
- [subscriptionOfferViewStyle(\_:)](view/subscriptionofferviewstyle%28__%29.md)
- [preferredSubscriptionOffer(\_:)](view/preferredsubscriptionoffer%28__%29.md): Selects a subscription offer to apply to a purchase that a customer makes from a subscription store view, a store view, or a product view.
- [preferredSubscriptionPricingTerms(\_:)](view/preferredsubscriptionpricingterms%28__%29.md)

### Accessing health data

- [healthDataAccessRequest(store:objectType:predicate:trigger:completion:)](view/healthdataaccessrequest%28store_objecttype_predicate_trigger_completion_%29.md): Asynchronously requests permission to read a data type that requires per-object authorization (such as vision prescriptions).
- [healthDataAccessRequest(store:readTypes:trigger:completion:)](view/healthdataaccessrequest%28store_readtypes_trigger_completion_%29.md): Requests permission to read the specified HealthKit data types.
- [healthDataAccessRequest(store:shareTypes:readTypes:trigger:completion:)](view/healthdataaccessrequest%28store_sharetypes_readtypes_trigger_completion_%29.md): Requests permission to save and read the specified HealthKit data types.
- [workoutPreview(\_:isPresented:)](view/workoutpreview%28__ispresented_%29.md): Presents a preview of the workout contents as a modal sheet

### Providing tips

- [popoverTip(\_:arrowEdge:action:)](view/popovertip%28__arrowedge_action_%29.md): Presents a popover tip on the modified view.
- [popoverTip(\_:isPresented:attachmentAnchor:arrowEdge:action:)](view/popovertip%28__ispresented_attachmentanchor_arrowedge_action_%29.md): Presents a popover tip on the modified view.
- [popoverTip(\_:isPresented:attachmentAnchor:arrowEdges:action:)](view/popovertip%28__ispresented_attachmentanchor_arrowedges_action_%29.md): Presents a popover tip on the modified view.
- [tipAnchor(\_:)](view/tipanchor%28__%29.md): Sets a value for the specified tip anchor to be used to anchor a tip view to the `.bounds` of the view.
- [tipBackground(\_:)](view/tipbackground%28__%29.md): Sets the tip’s view background to a style.
- [tipBackgroundInteraction(\_:)](view/tipbackgroundinteraction%28__%29.md): Controls whether people can interact with the view behind a presented tip.
- [tipCornerRadius(\_:antialiased:)](view/tipcornerradius%28__antialiased_%29.md): Sets the corner radius for an inline tip view.
- [tipImageSize(\_:)](view/tipimagesize%28__%29.md): Sets the size for a tip’s image.
- [tipViewStyle(\_:)](view/tipviewstyle%28__%29.md): Sets the given style for TipView within the view hierarchy.
- [tipImageStyle(\_:)](view/tipimagestyle%28__%29.md): Sets the style for a tip’s image.
- [tipImageStyle(\_:\_:)](view/tipimagestyle%28____%29.md): Sets the style for a tip’s image.
- [tipImageStyle(\_:\_:\_:)](view/tipimagestyle%28______%29.md): Sets the style for a tip’s image.

### Showing a translation

- [translationPresentation(isPresented:text:attachmentAnchor:arrowEdge:replacementAction:)](view/translationpresentation%28ispresented_text_attachmentanchor_arrowedge_replacementaction_%29.md): Presents a translation popover when a given condition is true.
- [translationTask(\_:action:)](view/translationtask%28__action_%29.md): Adds a task to perform before this view appears or when the translation configuration changes.
- [translationTask(source:target:action:)](view/translationtask%28source_target_action_%29.md): Adds a task to perform before this view appears or when the specified source or target languages change.
- [translationTask(source:target:preferredStrategy:action:)](view/translationtask%28source_target_preferredstrategy_action_%29.md): Adds a task to perform before this view appears or when the specified source or target languages change.

### Presenting journaling suggestions

- [journalingSuggestionsPicker(isPresented:onCompletion:)](view/journalingsuggestionspicker%28ispresented_oncompletion_%29.md): Presents a visual picker interface that contains events and images that a person can select to retrieve more information.
- [journalingSuggestionsPicker(isPresented:journalingSuggestionToken:onCompletion:)](view/journalingsuggestionspicker%28ispresented_journalingsuggestiontoken_oncompletion_%29.md): Presents a visual picker interface that contains events and images that a person can select to retrieve more information.

### Managing contact access

- [contactAccessButtonCaption(\_:)](view/contactaccessbuttoncaption%28__%29.md)
- [contactAccessButtonStyle(\_:)](view/contactaccessbuttonstyle%28__%29.md)
- [contactAccessPicker(isPresented:completionHandler:)](view/contactaccesspicker%28ispresented_completionhandler_%29.md): Modally present UI which allows the user to select which contacts your app has access to.

### Syncing game saves

- [gameSaveSyncingAlert(directory:finishedLoading:)](view/gamesavesyncingalert%28directory_finishedloading_%29.md): Presents a modal view while the game synced directory loads.

### Handling game controller events

- [handlesGameControllerEvents(matching:)](view/handlesgamecontrollerevents%28matching_%29.md): Specifies the game controllers events which should be delivered through the GameController framework when the view, or one of its descendants has focus.

### Creating a tabletop game

- [tabletopGame(\_:parent:automaticUpdate:)](view/tabletopgame%28__parent_automaticupdate_%29.md): Adds a tabletop game to a view.
- [tabletopGame(\_:parent:automaticUpdate:interaction:)](view/tabletopgame%28__parent_automaticupdate_interaction_%29.md): Supplies a closure which returns a new interaction whenever needed.

### Configuring camera controls

- [realityViewCameraControls](environmentvalues/realityviewcameracontrols.md): The camera controls for the reality view.
- [realityViewCameraControls(\_:)](view/realityviewcameracontrols%28__%29.md): Adds gestures that control the position and direction of a virtual camera.
- [realityViewLayoutBehavior(\_:)](view/realityviewlayoutbehavior%28__%29.md): A view modifier that controls the frame sizing and content alignment behavior for `RealityView`

### Interacting with transactions

- [transactionPicker(isPresented:selection:)](view/transactionpicker%28ispresented_selection_%29.md): Presents a picker that selects a collection of transactions.
