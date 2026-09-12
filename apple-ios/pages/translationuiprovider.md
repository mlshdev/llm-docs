> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/translationuiprovider](https://developer.apple.com/documentation/translationuiprovider)

# TranslationUIProvider

**Framework:** TranslationUIProvider  
**Kind:** Framework  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Provide UI for translations of text people select.

## Topics

### Essentials

- [Preparing your app to be the default translation app](translationuiprovider/preparing-your-app-to-be-the-default-translation-app.md): Configure your app so people can set it as the default translation app on their device.

### Creating translation app extensions

- [TranslationUIProviderContext](translationuiprovider/translationuiprovidercontext.md): An object that encapsulates the XPC communication between the host process and the third-party extension implementation.
- [TranslationUIProviderExtension](translationuiprovider/translationuiproviderextension.md): A protocol that translation apps implement to provide a text-selection view.
- [TranslationUIProviderExtensionScene](translationuiprovider/translationuiproviderextensionscene.md): The protocol this extension’s scene need to implement.

### Configuration and text selection

- [TranslationProviderUIExtensionConfiguration](translationuiprovider/translationprovideruiextensionconfiguration.md): The type for a translation UI provider extension’s configuration object.
- [TranslationUIProviderSelectedTextScene](translationuiprovider/translationuiproviderselectedtextscene.md): The specific app extension scene that this extension provides.
