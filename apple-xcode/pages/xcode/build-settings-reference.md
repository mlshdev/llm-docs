> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcode/build-settings-reference](https://developer.apple.com/documentation/xcode/build-settings-reference)

# Build settings reference

**Kind:** Article

A detailed list of individual Xcode build settings that control or change the way a target is built.

<a id="Overview"></a>

## Overview

Look up build settings for your Xcode project.

<a id="Active-Build-Action"></a>

### Active Build Action

**Setting name:** `ACTION`

A string identifying the build system action being performed.

<a id="Additional-SDKs"></a>

### Additional SDKs

**Setting name:** `ADDITIONAL_SDKS`

The locations of any sparse SDKs that should be layered on top of the one specified by `SDKROOT`. If more than one SDK is listed, the first one has highest precedence. Every SDK specified in this setting should be a “sparse” SDK, for example, not an SDK for an entire macOS release.

<a id="Allow-Multi-Platform-Builds"></a>

### Allow Multi-Platform Builds

**Setting name:** `ALLOW_TARGET_PLATFORM_SPECIALIZATION`

If enabled, allows targets to build multiple times within a single build operation. Targets will build for the platform of the active run destination, as well as the platforms of any targets which depend on them.

<a id="Alternate-Install-Group"></a>

### Alternate Install Group

**Setting name:** `ALTERNATE_GROUP`

The group name or gid for the files listed under the `ALTERNATE_PERMISSIONS_FILES` setting.

<a id="Alternate-Install-Permissions"></a>

### Alternate Install Permissions

**Setting name:** `ALTERNATE_MODE`

Permissions used for the files listed under the `ALTERNATE_PERMISSIONS_FILES` setting.

<a id="Alternate-Install-Owner"></a>

### Alternate Install Owner

**Setting name:** `ALTERNATE_OWNER`

The owner name or uid for the files listed under the `ALTERNATE_PERMISSIONS_FILES` setting.

<a id="Alternate-Permissions-Files"></a>

### Alternate Permissions Files

**Setting name:** `ALTERNATE_PERMISSIONS_FILES`

List of files to which the alternate owner, group and permissions are applied.

<a id="Alternative-Distribution-Web"></a>

### Alternative Distribution - Web

**Setting name:** `ALTERNATIVE_DISTRIBUTION_WEB`

Enable overriding your app’s distributor identifier for web distribution when running from Xcode.

<a id="Always-Embed-Swift-Standard-Libraries"></a>

### Always Embed Swift Standard Libraries

**Setting name:** `ALWAYS_EMBED_SWIFT_STANDARD_LIBRARIES`

Always embed the Swift standard libraries in the target’s products, even if the target does not contain any Swift code.  For example, this should be enabled if the target is embedding other products which contain Swift, or if it is a test target which does not contain Swift but which is testing a product which does.  This setting only applies to wrapped products, not to standalone binary products.

<a id="Always-Search-User-Paths-Deprecated"></a>

### Always Search User Paths (Deprecated)

**Setting name:** `ALWAYS_SEARCH_USER_PATHS`

This setting is deprecated as of Xcode 8.3 and may not be supported in future versions. It is recommended that you disable the setting.

If enabled, both `#include <header.h>`-style and `#include "header.h"`-style directives search the paths in `USER_HEADER_SEARCH_PATHS` before `HEADER_SEARCH_PATHS`. As a consequence, user headers, such as your own `String.h` header, have precedence over system headers when using `#include <header.h>`. This is done using the `-iquote` flag for the paths provided in `USER_HEADER_SEARCH_PATHS`. If disabled and your compiler fully supports separate user paths, user headers are only accessible with `#include "header.h"`-style preprocessor directives.

For backwards compatibility reasons, this setting is enabled by default. Disabling it is strongly recommended.

<a id="Require-Only-App-Extension-Safe-API"></a>

### Require Only App-Extension-Safe API

**Setting name:** `APPLICATION_EXTENSION_API_ONLY`

When enabled, this causes the compiler and linker to disallow use of APIs that are not available to app extensions and to disallow linking to frameworks that have not been built with this setting enabled.

<a id="Convert-Copied-Files"></a>

### Convert Copied Files

**Setting name:** `APPLY_RULES_IN_COPY_FILES`

Enabling this setting will cause files in the target’s Copy Files build phases to be processed by build rules. For example, property list files (`.plist`) and strings files will be converted as specified by `PLIST_FILE_OUTPUT_FORMAT` and `STRINGS_FILE_OUTPUT_ENCODING`, respectively.

<a id="Process-Header-Files"></a>

### Process Header Files

**Setting name:** `APPLY_RULES_IN_COPY_HEADERS`

Enabling this setting will cause all Public and Private headers in the target’s Copy Headers build phase to be processed by build rules. This allows custom build rules to be defined to process these headers. Custom script rules can define their outputs relative to `HEADER_OUTPUT_DIR`, which will be provided to that script, taking the header visibility into account. The scripts are also passed `SCRIPT_HEADER_VISIBILITY` (“public” or “private”). Files that should not be processed by build rules may need to be moved to a Copy Files build phase when this setting is enabled.

<a id="Enable-App-Shortcuts-Flexible-Matching"></a>

### Enable App Shortcuts Flexible Matching

**Setting name:** `APP_SHORTCUTS_ENABLE_FLEXIBLE_MATCHING`

When enabled, generates assets needed for App Shortcuts Flexible Matching.

<a id="Architectures"></a>

### Architectures

**Setting name:** `ARCHS`

A list of the architectures for which the product will be built. This is usually set to a predefined build setting provided by the platform. If more than one architecture is specified, a universal binary will be produced.

<a id="Alternate-App-Icon-Sets"></a>

### Alternate App Icon Sets

**Setting name:** `ASSETCATALOG_COMPILER_ALTERNATE_APPICON_NAMES`

A set of additional app icon set names to include as in the built product. The icons will be available at runtime for use as alternate app icons. This is an alternative to `--include-all-app-icons` providing more detailed control.

<a id="Primary-App-Icon-Set-Name"></a>

### Primary App Icon Set Name

**Setting name:** `ASSETCATALOG_COMPILER_APPICON_NAME`

Name of an app icon set for the target’s default app icon. The contents will be merged into the `Info.plist`.

<a id="Watch-Complication-Name"></a>

### Watch Complication Name

**Setting name:** `ASSETCATALOG_COMPILER_COMPLICATION_NAME`

The name of a watch complication to use from the asset catalog.

<a id="Generate-Asset-Symbols"></a>

### Generate Asset Symbols

**Setting name:** `ASSETCATALOG_COMPILER_GENERATE_ASSET_SYMBOLS`

Generate asset symbols for each color and image in the catalog.

<a id="Generate-Swift-Asset-Symbol-Framework-Support"></a>

### Generate Swift Asset Symbol Framework Support

**Setting name:** `ASSETCATALOG_COMPILER_GENERATE_ASSET_SYMBOL_FRAMEWORKS`

Generate asset symbol support for the specified UI frameworks (e.g. SwiftUI, UIKit, AppKit).

<a id="Generate-Swift-Asset-Symbol-Extensions"></a>

### Generate Swift Asset Symbol Extensions

**Setting name:** `ASSETCATALOG_COMPILER_GENERATE_SWIFT_ASSET_SYMBOL_EXTENSIONS`

Generate asset symbol extensions on Apple framework color and image types.

<a id="Global-Accent-Color-Name"></a>

### Global Accent Color Name

**Setting name:** `ASSETCATALOG_COMPILER_GLOBAL_ACCENT_COLOR_NAME`

The name of a color resource to use as a the target’s accent color, used as the default tint color on iOS and watchOS, and accent color on macOS.

<a id="Include-All-App-Icon-Assets"></a>

### Include All App Icon Assets

**Setting name:** `ASSETCATALOG_COMPILER_INCLUDE_ALL_APPICON_ASSETS`

When true, all app icon assets from the target’s Asset Catalogs will be included in the built product, making the available at runtime for use as alternate app icons. When false, only the primary app icon will be included in the built product.

<a id="Include-Asset-Localizations-in-Infoplist"></a>

### Include Asset Localizations in Info.plist

**Setting name:** `ASSETCATALOG_COMPILER_INCLUDE_INFOPLIST_LOCALIZATIONS`

When enabled, includes the localization information of the selected assets in the generated partial Info.plist file under the CFBundleLocalizations key. This will allow the assets to be used at runtime in the absence of a corresponding lproj directory in the bundle.

<a id="Asset-Catalog-Launch-Image-Set-Name"></a>

### Asset Catalog Launch Image Set Name

**Setting name:** `ASSETCATALOG_COMPILER_LAUNCHIMAGE_NAME`

Name of an asset catalog launch image set whose contents will be merged into the `Info.plist`.

<a id="Leaderboard-Identifier-Prefix"></a>

### Leaderboard Identifier Prefix

**Setting name:** `ASSETCATALOG_COMPILER_LEADERBOARD_IDENTIFIER_PREFIX`

Leaderboards in the asset catalog may optionally specify a Game Center identifier. If they do not, their name will be prefixed by this value to form an automatically generated identifier.

<a id="Leaderboard-Set-Identifier-Prefix"></a>

### Leaderboard Set Identifier Prefix

**Setting name:** `ASSETCATALOG_COMPILER_LEADERBOARD_SET_IDENTIFIER_PREFIX`

Leaderboard sets in the asset catalog may optionally specify a Game Center identifier. If they do not, their name will be prefixed by this value to form an automatically generated identifier.

<a id="Optimization"></a>

### Optimization

**Setting name:** `ASSETCATALOG_COMPILER_OPTIMIZATION`

With no value, the compiler uses the default optimization. You can also specify `time` to optimize for speed of access or `space` to optimize for a smaller compiled asset catalogs.

<a id="Skip-App-Store-Deployment"></a>

### Skip App Store Deployment

**Setting name:** `ASSETCATALOG_COMPILER_SKIP_APP_STORE_DEPLOYMENT`

Whether to perform App Store-specific behaviors such as validations. For example, building for an iOS or watchOS app will warn if a 1024 App Store icon is not present, but only when compiling for App Store deployment.

<a id="Standalone-Icon-File-Behavior"></a>

### Standalone Icon File Behavior

**Setting name:** `ASSETCATALOG_COMPILER_STANDALONE_ICON_BEHAVIOR`

Controls whether loose PNG or ICNS files are created for the primary app icon, in addition to including the content in the Assets.car file. By default, a small subset of sizes are included as loose files, allowing external management tools to display a representative icon without reading the CAR file. This can be set to ‘all’ or ‘none’ to include more or fewer icon sizes as loose files.

<a id="Sticker-Pack-Identifier-Prefix"></a>

### Sticker Pack Identifier Prefix

**Setting name:** `ASSETCATALOG_COMPILER_STICKER_PACK_IDENTIFIER_PREFIX`

Sticker Packs in the asset catalog may optionally specify an identifier. If they do not, their name will be prefixed by this value to form an automatically generated identifier.

<a id="Widget-Background-Color-Name"></a>

### Widget Background Color Name

**Setting name:** `ASSETCATALOG_COMPILER_WIDGET_BACKGROUND_COLOR_NAME`

The name of a color resource to use as the background color for a widget.

<a id="Show-Notices"></a>

### Show Notices

**Setting name:** `ASSETCATALOG_NOTICES`

Show notices encountered during the compilation of asset catalogs.

<a id="Asset-Catalog-Other-Flags"></a>

### Asset Catalog Other Flags

**Setting name:** `ASSETCATALOG_OTHER_FLAGS`

Pass additional flags through to the asset catalog compiler.

<a id="Show-Warnings"></a>

### Show Warnings

**Setting name:** `ASSETCATALOG_WARNINGS`

Show warnings encountered during the compilation of asset catalogs.

<a id="Asset-Pack-Manifest-URL-Prefix"></a>

### Asset Pack Manifest URL Prefix

**Setting name:** `ASSET_PACK_MANIFEST_URL_PREFIX`

If set to anything other than the empty string, every URL in the `AssetPackManifest.plist` file will consist of this string with the name of the asset pack appended. If not set, the URLs in the `AssetPackManifest.plist` will be formed as appropriate for the build location of the asset packs. The prefix string is not escaped or quoted in any way, so any necessary escaping must be part of the URL string. This setting affects only URLs in the `AssetPackManifest.plist` file — it does not affect where asset packs are built in the local file system.

<a id="Apple-Events"></a>

### Apple Events

**Setting name:** `AUTOMATION_APPLE_EVENTS`

A Boolean value that indicates whether the app may prompt the user for permission to send Apple events to other apps.

<a id="Active-Build-Components"></a>

### Active Build Components

**Setting name:** `BUILD_COMPONENTS`

A list of components being built during this action.

<a id="Build-Libraries-for-Distribution"></a>

### Build Libraries for Distribution

**Setting name:** `BUILD_LIBRARY_FOR_DISTRIBUTION`

Ensures that your libraries are built for distribution. For Swift, this enables support for library evolution and generation of a module interface file.

<a id="Build-Known-Localizations-Only"></a>

### Build Known Localizations Only

**Setting name:** `BUILD_ONLY_KNOWN_LOCALIZATIONS`

When enabled, only builds content for languages explicitly supported by the project.

<a id="Build-Variants"></a>

### Build Variants

**Setting name:** `BUILD_VARIANTS`

A list of the build variants of the linked binary that will be produced. By default, only the `normal` variant is produced. Other common values include `debug` and `profile`.

<a id="BUILTPRODUCTSDIR"></a>

### BUILT_PRODUCTS_DIR

**Setting name:** `BUILT_PRODUCTS_DIR`

Identifies the directory under which all the product’s files can be found. This directory contains either product files or symbolic links to them. Run Script build phases can use the value of this build setting as a convenient way to refer to the product files built by one or more targets even when these files are scattered throughout a directory hierarchy (for example, when `DEPLOYMENT_LOCATION` is set to `YES`.

<a id="Bundle-Loader"></a>

### Bundle Loader

**Setting name:** `BUNDLE_LOADER`

Specifies the executable that will load the bundle output file being linked. Undefined symbols from the bundle are checked against the specified executable as if it is one of the dynamic libraries the bundle was linked with.

<a id="Enable-C++-Container-Overflow-Checks"></a>

### Enable C++ Container Overflow Checks

**Setting name:** `CLANG_ADDRESS_SANITIZER_CONTAINER_OVERFLOW`

Check for C++ container overflow when Address Sanitizer is enabled. This check requires the entire application to be built with Address Sanitizer. If not, it may report false positives.

<a id="Allow-Non-modular-Includes-In-Framework-Modules"></a>

### Allow Non-modular Includes In Framework Modules

**Setting name:** `CLANG_ALLOW_NON_MODULAR_INCLUDES_IN_FRAMEWORK_MODULES`

Enabling this setting allows non-modular includes to be used from within framework modules. This is inherently unsafe, as such headers might cause duplicate definitions when used by any client that imports both the framework and the non-modular includes.

<a id="Dead-Stores"></a>

### Dead Stores

**Setting name:** `CLANG_ANALYZER_DEADCODE_DEADSTORES`

Check for values stored to variables and never read again.

<a id="Division-by-Zero"></a>

### Division by Zero

**Setting name:** `CLANG_ANALYZER_DIVIDE_BY_ZERO`

Check for division by zero.

<a id="Misuse-of-Grand-Central-Dispatch"></a>

### Misuse of Grand Central Dispatch

**Setting name:** `CLANG_ANALYZER_GCD`

Check for misuses of the Grand Central Dispatch API.

<a id="Performance-Anti-Patterns-with-Grand-Central-Dispatch"></a>

### Performance Anti-Patterns with Grand Central Dispatch

**Setting name:** `CLANG_ANALYZER_GCD_PERFORMANCE`

Check for Grand Central Dispatch idioms that may lead to poor performance.

<a id="Violation-of-IOKit-and-libkern-Reference-Counting-Rules"></a>

### Violation of IOKit and libkern Reference Counting Rules

**Setting name:** `CLANG_ANALYZER_LIBKERN_RETAIN_COUNT`

Finds leaks and over-releases associated with objects inheriting from OSObject.

<a id="Missing-Localization-Context-Comment"></a>

### Missing Localization Context Comment

**Setting name:** `CLANG_ANALYZER_LOCALIZABILITY_EMPTY_CONTEXT`

Warn when a call to an `NSLocalizedString()` macro is missing a context comment for the localizer.

<a id="Missing-Localizability"></a>

### Missing Localizability

**Setting name:** `CLANG_ANALYZER_LOCALIZABILITY_NONLOCALIZED`

Warn when a nonlocalized string is passed to a user interface method expecting a localized string.

<a id="Improper-Memory-Management"></a>

### Improper Memory Management

**Setting name:** `CLANG_ANALYZER_MEMORY_MANAGEMENT`

Warn about memory leaks, use-after-free, and other API misuses.

<a id="Violation-of-Mach-Interface-Generator-Conventions"></a>

### Violation of Mach Interface Generator Conventions

**Setting name:** `CLANG_ANALYZER_MIG_CONVENTIONS`

Warn when a MIG routine violates memory management conventions.

<a id="Misuse-of-nonnull"></a>

### Misuse of ‘nonnull’

**Setting name:** `CLANG_ANALYZER_NONNULL`

Check for misuses of `nonnull` parameter and return types.

<a id="Dereference-of-Null-Pointers"></a>

### Dereference of Null Pointers

**Setting name:** `CLANG_ANALYZER_NULL_DEREFERENCE`

Check for dereferences of null pointers.

<a id="Suspicious-Conversions-of-NSNumber-and-CFNumberRef"></a>

### Suspicious Conversions of NSNumber and CFNumberRef

**Setting name:** `CLANG_ANALYZER_NUMBER_OBJECT_CONVERSION`

Warn when a number object, such as an instance of `NSNumber`, `CFNumberRef`, `OSNumber`, or `OSBoolean` is compared or converted to a primitive value instead of another object.

<a id="synchronized-with-nil-mutex"></a>

### @synchronized with nil mutex

**Setting name:** `CLANG_ANALYZER_OBJC_ATSYNC`

Warn on `nil` pointers used as mutexes for `@synchronized`.

<a id="Misuse-of-Collections-API"></a>

### Misuse of Collections API

**Setting name:** `CLANG_ANALYZER_OBJC_COLLECTIONS`

Warn if `CF` collections are created with non-pointer-size values. Check if `NS` collections are initialized with non-Objective-C type elements.

<a id="Improper-Instance-Cleanup-in--dealloc"></a>

### Improper Instance Cleanup in ‘-dealloc’

**Setting name:** `CLANG_ANALYZER_OBJC_DEALLOC`

Warn when an instance is improperly cleaned up in `-dealloc`.

<a id="Misuse-of-Objective-C-generics"></a>

### Misuse of Objective-C generics

**Setting name:** `CLANG_ANALYZER_OBJC_GENERICS`

Warn if a specialized generic type is converted to an incompatible type.

<a id="Method-Signatures-Mismatch"></a>

### Method Signatures Mismatch

**Setting name:** `CLANG_ANALYZER_OBJC_INCOMP_METHOD_TYPES`

Warn about Objective-C method signatures with type incompatibilities.

<a id="Improper-Handling-of-CFError-and-NSError"></a>

### Improper Handling of CFError and NSError

**Setting name:** `CLANG_ANALYZER_OBJC_NSCFERROR`

Warn if functions accepting `CFErrorRef` or `NSError` cannot indicate that an error occurred.

<a id="Violation-of-Reference-Counting-Rules"></a>

### Violation of Reference Counting Rules

**Setting name:** `CLANG_ANALYZER_OBJC_RETAIN_COUNT`

Warn on leaks and improper reference count management.

<a id="Violation-of-self-=-super-init-Rule"></a>

### Violation of ‘self = \[super init\]’ Rule

**Setting name:** `CLANG_ANALYZER_OBJC_SELF_INIT`

Check that `super init` is properly called within an Objective-C initialization method.

<a id="Unused-Ivars"></a>

### Unused Ivars

**Setting name:** `CLANG_ANALYZER_OBJC_UNUSED_IVARS`

Warn about private ivars that are never used.

<a id="C-style-Downcasts-of-IOKit-Objects"></a>

### C-style Downcasts of IOKit Objects

**Setting name:** `CLANG_ANALYZER_OSOBJECT_C_STYLE_CAST`

Warn when a C-style cast is used for downcasting a pointer to an OSObject. RTTI-aware casts (OSRequiredCast, OSDynamicCast) are more secure and should be used instead of C-style casts in order to avoid potential type confusion attacks.

<a id="EXPERIMENTAL-Buffer-overflows"></a>

### EXPERIMENTAL Buffer overflows

**Setting name:** `CLANG_ANALYZER_SECURITY_BUFFER_OVERFLOW_EXPERIMENTAL`

Check for potential buffer overflows.

<a id="Floating-Point-Value-Used-as-Loop-Counter"></a>

### Floating Point Value Used as Loop Counter

**Setting name:** `CLANG_ANALYZER_SECURITY_FLOATLOOPCOUNTER`

Warn on using a floating point value as a loop counter (CERT: FLP30-C, FLP30-CPP).

<a id="Use-of-getpw-gets-Buffer-Overflow"></a>

### Use of ‘getpw’, ‘gets’ (Buffer Overflow)

**Setting name:** `CLANG_ANALYZER_SECURITY_INSECUREAPI_GETPW_GETS`

Warn on uses of `getpw` and `gets`. The functions are dangerous as they may trigger a buffer overflow.

<a id="Use-of-mktemp-or-Predictable-mktemps"></a>

### Use of ‘mktemp’ or Predictable ‘mktemps’

**Setting name:** `CLANG_ANALYZER_SECURITY_INSECUREAPI_MKSTEMP`

Warn on uses of `mktemp`, which produces predictable temporary files. It is obsoleted by `mktemps`. Warn when `mkstemp` is passed fewer than 6 `X`’s in the format string.

<a id="Use-of-rand-Functions"></a>

### Use of ‘rand’ Functions

**Setting name:** `CLANG_ANALYZER_SECURITY_INSECUREAPI_RAND`

Warn on uses of `rand`, `random`, and related functions, which produce predictable random number sequences. Use `arc4random` instead.

<a id="Use-of-strcpy-and-strcat"></a>

### Use of ‘strcpy’ and ‘strcat’

**Setting name:** `CLANG_ANALYZER_SECURITY_INSECUREAPI_STRCPY`

Warn on uses of the `strcpy` and `strcat` functions, which can result in buffer overflows. Use `strlcpy` or `strlcat` instead.

<a id="Unchecked-Return-Values"></a>

### Unchecked Return Values

**Setting name:** `CLANG_ANALYZER_SECURITY_INSECUREAPI_UNCHECKEDRETURN`

Warn on uses of sensitive functions whose return values must be always checked.

<a id="Use-of-vfork"></a>

### Use of ‘vfork’

**Setting name:** `CLANG_ANALYZER_SECURITY_INSECUREAPI_VFORK`

Warn on uses of the `vfork` function, which is inherently insecure. Use the safer `posix_spawn` function instead.

<a id="Misuse-of-Keychain-Services-API"></a>

### Misuse of Keychain Services API

**Setting name:** `CLANG_ANALYZER_SECURITY_KEYCHAIN_API`

Check for leaks of keychain attribute lists and data buffers returned by the Keychain Services API.

<a id="Use-After-Move-Errors-in-C++"></a>

### Use-After-Move Errors in C++

**Setting name:** `CLANG_ANALYZER_USE_AFTER_MOVE`

Warn when a C++ object is used after it has been moved from.

<a id="C++-Language-Dialect"></a>

### C++ Language Dialect

**Setting name:** `CLANG_CXX_LANGUAGE_STANDARD`

Choose a standard or non-standard C++ language dialect. Options include:

- *C++98:* Accept ISO C++ 1998 with amendments, but not GNU extensions. \[-std=c++98\]
- *GNU++98:* Accept ISO C++ 1998 with amendments and GNU extensions. \[-std=gnu++98\]
- *C++11:* Accept the ISO C++ 2011 standard with amendments, but not GNU extensions. \[-std=c++11\]
- *GNU++11:* Accept the ISO C++ 2011 standard with amendments and GNU extensions. \[-std=gnu++11\]
- *C++14:* Accept the ISO C++ 2014 standard with amendments, but not GNU extensions. \[-std=c++14\]
- *GNU++14:* Accept the ISO C++ 2014 standard with amendments and GNU extensions. \[-std=gnu++14\]
- *C++17:* Accept the ISO C++ 2017 standard with amendments, but not GNU extensions. \[-std=c++17\]
- *GNU++17:* Accept the ISO C++ 2017 standard with amendments and GNU extensions. \[-std=gnu++17\]
- *C++20:* Accept the ISO C++ 2020 standard with amendments, but not GNU extensions. \[-std=c++20\]
- *GNU++20:* Accept the ISO C++ 2020 standard with amendments and GNU extensions. \[-std=gnu++20\]
- *C++23:* Accept the ISO C++ 2023 standard with amendments, but not GNU extensions. \[-std=c++23\]
- *GNU++23:* Accept the ISO C++ 2023 standard with amendments and GNU extensions. \[-std=gnu++23\]
- *Compiler Default:* Tells the compiler to use its default C++ language dialect. This is normally the best choice unless you have specific needs. (Currently equivalent to GNU++98.)

<a id="Enable-C++-Standard-Library-Hardening"></a>

### Enable C++ Standard Library Hardening

**Setting name:** `CLANG_CXX_STANDARD_LIBRARY_HARDENING`

Enable hardening in the C++ standard library.

Available values:

- *No:* No runtime hardening checks.
- *Yes (fast):* Enable low-overhead security-critical checks at runtime.
- *Yes (extensive):* Enable low-overhead checks at runtime to find security issues as well as general logic errors.
- *Yes (debug):* Enable all available checks in the library, including high-overhead heuristic checks and internal assertions. This mode should **not** be used in production.

This setting defines the value of the `_LIBCPP_HARDENING_MODE` preprocessor macro.

<a id="Debug-Information-Level"></a>

### Debug Information Level

**Setting name:** `CLANG_DEBUG_INFORMATION_LEVEL`

Toggles the amount of debug information emitted when debug symbols are enabled. This can impact the size of the generated debug information, which may matter in some cases for large projects, such as when using LTO.

<a id="Enable-Typed-Allocator-in-C++"></a>

### Enable Typed Allocator in C++

**Setting name:** `CLANG_ENABLE_CPLUSPLUS_TYPED_ALLOCATOR_SUPPORT`

Enables compiler rewriting of allocation calls in C++ to provide type information to the allocator. Mitigates use-after-free security vulnerabilities.

<a id="Destroy-Static-Objects"></a>

### Destroy Static Objects

**Setting name:** `CLANG_ENABLE_CPP_STATIC_DESTRUCTORS`

Controls whether variables with static or thread storage duration should have their exit-time destructors run.

<a id="Enable-Typed-Allocator-in-C"></a>

### Enable Typed Allocator in C

**Setting name:** `CLANG_ENABLE_C_TYPED_ALLOCATOR_SUPPORT`

Enables compiler rewriting of allocation calls in C to provide type information to the allocator. Mitigates use-after-free security vulnerabilities.

<a id="Enable-Modules-C-and-Objective-C"></a>

### Enable Modules (C and Objective-C)

**Setting name:** `CLANG_ENABLE_MODULES`

Enables the use of modules for system APIs. System headers are imported as semantic modules instead of raw headers. This can result in faster builds and project indexing.

<a id="Enable-Clang-Module-Debugging"></a>

### Enable Clang Module Debugging

**Setting name:** `CLANG_ENABLE_MODULE_DEBUGGING`

When this setting is enabled, `clang` will use the shared debug info available in `clang` modules and precompiled headers. This results in smaller build artifacts, faster compile times, and more complete debug info. This setting should only be disabled when building static libraries with debug info for distribution.

<a id="Objective-C-Automatic-Reference-Counting"></a>

### Objective-C Automatic Reference Counting

**Setting name:** `CLANG_ENABLE_OBJC_ARC`

Compiles reference-counted Objective-C code to use Automatic Reference Counting. Code compiled using automated reference counting is compatible with other code (such as frameworks) compiled using either manual reference counting (for example, traditional `retain` and `release` messages) or automated reference counting. \[-fobjc-arc\]

<a id="Enable-Objective-C-ARC-Exceptions"></a>

### Enable Objective-C ARC Exceptions

**Setting name:** `CLANG_ENABLE_OBJC_ARC_EXCEPTIONS`

This setting causes clang to use exception-handler-safe code when synthesizing retains and releases when using ARC. Without this, ARC is not exception-safe. Only applies to Objective-C. \[-fobjc-arc-exceptions\]

<a id="Weak-References-in-Manual-Retain-Release"></a>

### Weak References in Manual Retain Release

**Setting name:** `CLANG_ENABLE_OBJC_WEAK`

Compiles Objective-C code to enable weak references for code compiled with manual retain release (MRR) semantics.

<a id="Enable-Stack-Zero-Initialization"></a>

### Enable Stack Zero Initialization

**Setting name:** `CLANG_ENABLE_STACK_ZERO_INIT`

Automatically initializes stack variables to zero as a security protection.

<a id="Do-not-index-C-macros"></a>

### Do not index C macros

**Setting name:** `CLANG_INDEX_STORE_IGNORE_MACROS`

Do not emit entries for C macros into the Index Store.

<a id="Implicitly-Link-Objective-C-Runtime-Support"></a>

### Implicitly Link Objective-C Runtime Support

**Setting name:** `CLANG_LINK_OBJC_RUNTIME`

When linking a target using Objective-C code, implicitly link in Foundation (and if deploying back to an older OS) a backwards compatibility library to allow newer language features to run on an OS where the runtime support is not natively available. Most targets that use Objective-C should use this, although there are rare cases where a target should opt out of this behavior.

<a id="Link-Frameworks-Automatically"></a>

### Link Frameworks Automatically

**Setting name:** `CLANG_MODULES_AUTOLINK`

Automatically link SDK frameworks that are referenced using `#import` or `#include`. This feature requires also enabling support for modules. This build setting only applies to C-family languages.

<a id="Disable-Private-Modules-Warnings"></a>

### Disable Private Modules Warnings

**Setting name:** `CLANG_MODULES_DISABLE_PRIVATE_WARNING`

Disable warnings related to the recommended use of private module naming. This only makes sense when support for modules is enabled.

<a id="Optimization-Profile-File"></a>

### Optimization Profile File

**Setting name:** `CLANG_OPTIMIZATION_PROFILE_FILE`

The path to the file of the profile data to use when `CLANG_USE_OPTIMIZATION_PROFILE` is enabled.

<a id="Mode-of-Analysis-for-Build"></a>

### Mode of Analysis for ‘Build’

**Setting name:** `CLANG_STATIC_ANALYZER_MODE`

The depth the static analyzer uses during the Build action. Use `Deep` to exercise the full power of the analyzer. Use `Shallow` for faster analysis.

<a id="Mode-of-Analysis-for-Analyze"></a>

### Mode of Analysis for ‘Analyze’

**Setting name:** `CLANG_STATIC_ANALYZER_MODE_ON_ANALYZE_ACTION`

The depth the static analyzer uses during the Analyze action. Use `Deep` to exercise the full power of the analyzer. Use `Shallow` for faster analysis.

<a id="Side-Effects-in-Assert-Conditions"></a>

### Side Effects in Assert Conditions

**Setting name:** `CLANG_TIDY_BUGPRONE_ASSERT_SIDE_EFFECT`

Warn when condition of assert or NSAssert has a side effect. Assert conditions are not evaluated during release builds.

<a id="Infinite-Loops"></a>

### Infinite Loops

**Setting name:** `CLANG_TIDY_BUGPRONE_INFINITE_LOOP`

Warn when a loop is discovered to have no termination condition.

<a id="Moves-of-Universal-References"></a>

### Moves of Universal References

**Setting name:** `CLANG_TIDY_BUGPRONE_MOVE_FORWARDING_REFERENCE`

Warn when use of std::move on a universal reference would cause non-expiring lvalue arguments to be moved unexpectedly.

<a id="Redundant-Nested-if-Conditions"></a>

### Redundant Nested ‘if’ Conditions

**Setting name:** `CLANG_TIDY_BUGPRONE_REDUNDANT_BRANCH_CONDITION`

Warn when an if-statement is redundant because its condition is equivalent to the condition of a larger if-statement it is nested into.

<a id="Redundant-Expressions"></a>

### Redundant Expressions

**Setting name:** `CLANG_TIDY_MISC_REDUNDANT_EXPRESSION`

Warn when a sub-expression of an arithmetic or logic expression can be omitted because it has no effect on the result.

<a id="Trivial-automatic-variable-initialization"></a>

### Trivial automatic variable initialization

**Setting name:** `CLANG_TRIVIAL_AUTO_VAR_INIT`

Specify whether stack variables should be uninitialized, which can cause inadvertent information disclosure when uninitialized stack variables are used, or whether they should be pattern-initialized.

<a id="Enable-Extra-Integer-Checks"></a>

### Enable Extra Integer Checks

**Setting name:** `CLANG_UNDEFINED_BEHAVIOR_SANITIZER_INTEGER`

Check for unsigned integer overflow, in addition to checks for signed integer overflow.

<a id="Enable-Nullability-Annotation-Checks"></a>

### Enable Nullability Annotation Checks

**Setting name:** `CLANG_UNDEFINED_BEHAVIOR_SANITIZER_NULLABILITY`

Check for violations of nullability annotations in function calls, return statements, and assignments.

<a id="Use-Optimization-Profile"></a>

### Use Optimization Profile

**Setting name:** `CLANG_USE_OPTIMIZATION_PROFILE`

When this setting is enabled, `clang` will use the optimization profile collected for a target when building it.

<a id="Use-Response-Files"></a>

### Use Response Files

**Setting name:** `CLANG_USE_RESPONSE_FILE`

When this setting is enabled, the build system will use response files to share common arguments between similar invocations of `clang`, eliminating redundant information in build logs.

<a id="Out-of-Range-Enum-Assignments"></a>

### Out-of-Range Enum Assignments

**Setting name:** `CLANG_WARN_ASSIGN_ENUM`

Warn about assigning integer constants to enum values that are out of the range of the enumerated type.

<a id="Usage-of-implicit-sequentially-consistent-atomics"></a>

### Usage of implicit sequentially-consistent atomics

**Setting name:** `CLANG_WARN_ATOMIC_IMPLICIT_SEQ_CST`

Warns when an atomic is used with an implicitly sequentially-consistent memory order, instead of explicitly specifying memory order.

<a id="Block-Capture-of-Autoreleasing"></a>

### Block Capture of Autoreleasing

**Setting name:** `CLANG_WARN_BLOCK_CAPTURE_AUTORELEASING`

Warn about block captures of implicitly autoreleasing parameters.

<a id="Implicit-Boolean-Conversions"></a>

### Implicit Boolean Conversions

**Setting name:** `CLANG_WARN_BOOL_CONVERSION`

Warn about implicit conversions to boolean values that are suspicious. For example, writing `if (foo)` where `foo` is the name a function will trigger a warning.

<a id="Suspicious-Commas"></a>

### Suspicious Commas

**Setting name:** `CLANG_WARN_COMMA`

Warn about suspicious uses of the comma operator.

<a id="Completion-Handler-Misuse"></a>

### Completion Handler Misuse

**Setting name:** `CLANG_WARN_COMPLETION_HANDLER_MISUSE`

Warn when a function-like parameter annotated as a completion handler is called more than once or not called at all on an execution path.

<a id="Implicit-Constant-Conversions"></a>

### Implicit Constant Conversions

**Setting name:** `CLANG_WARN_CONSTANT_CONVERSION`

Warn about implicit conversions of constant values that cause the constant value to change, either through a loss of precision, or entirely in its meaning.

<a id="Using-C++11-extensions-in-earlier-versions-of-C++"></a>

### Using C++11 extensions in earlier versions of C++

**Setting name:** `CLANG_WARN_CXX0X_EXTENSIONS`

When compiling C++ code using a language standard older than C++11, warn about the use of C++11 extensions.

<a id="Deleting-Instance-of-Polymorphic-Class-with-No-Virtual-Destructor"></a>

### Deleting Instance of Polymorphic Class with No Virtual Destructor

**Setting name:** `CLANG_WARN_DELETE_NON_VIRTUAL_DTOR`

Warn when deleting an instance of a polymorphic class with virtual functions but without a virtual destructor.

<a id="Overriding-Deprecated-Objective-C-Methods"></a>

### Overriding Deprecated Objective-C Methods

**Setting name:** `CLANG_WARN_DEPRECATED_OBJC_IMPLEMENTATIONS`

Warn if an Objective-C class either subclasses a deprecated class or overrides a method that has been marked deprecated or unavailable.

<a id="Direct-usage-of-isa"></a>

### Direct usage of ‘isa’

**Setting name:** `CLANG_WARN_DIRECT_OBJC_ISA_USAGE`

Warn about direct accesses to the Objective-C `isa` pointer instead of using a runtime API.

<a id="Documentation-Comments"></a>

### Documentation Comments

**Setting name:** `CLANG_WARN_DOCUMENTATION_COMMENTS`

Warns about issues in documentation comments (`doxygen`-style) such as missing or incorrect documentation tags.

<a id="Empty-Loop-Bodies"></a>

### Empty Loop Bodies

**Setting name:** `CLANG_WARN_EMPTY_BODY`

Warn about loop bodies that are suspiciously empty.

<a id="Implicit-Enum-Conversions"></a>

### Implicit Enum Conversions

**Setting name:** `CLANG_WARN_ENUM_CONVERSION`

Warn about implicit conversions between different kinds of enum values. For example, this can catch issues when using the wrong enum flag as an argument to a function or method.

<a id="Implicit-Float-Conversions"></a>

### Implicit Float Conversions

**Setting name:** `CLANG_WARN_FLOAT_CONVERSION`

Warn about implicit conversions that turn floating-point numbers into integers.

<a id="Public-Framework-Header-Includes-Private-Framework-Header"></a>

### Public Framework Header Includes Private Framework Header

**Setting name:** `CLANG_WARN_FRAMEWORK_INCLUDE_PRIVATE_FROM_PUBLIC`

Warns when a public framework header includes a private framework header.

<a id="Implicit-Fallthrough-in-Switch-Statement"></a>

### Implicit Fallthrough in Switch Statement

**Setting name:** `CLANG_WARN_IMPLICIT_FALLTHROUGH`

Warn about implicit fallthrough in switch statement. Use `__attribute__((fallthrough))` (C/ObjC) or `[[fallthrough]]` (C++) to mark intentional fallthrough.

<a id="Implicit-Signedness-Conversions"></a>

### Implicit Signedness Conversions

**Setting name:** `CLANG_WARN_IMPLICIT_SIGN_CONVERSION`

Warn about implicit integer conversions that change the signedness of an integer value.

<a id="Infinite-Recursion"></a>

### Infinite Recursion

**Setting name:** `CLANG_WARN_INFINITE_RECURSION`

Warn if all paths through a function call itself.

<a id="Implicit-Integer-to-Pointer-Conversions"></a>

### Implicit Integer to Pointer Conversions

**Setting name:** `CLANG_WARN_INT_CONVERSION`

Warn about implicit conversions between pointers and integers. For example, this can catch issues when one incorrectly intermixes using `NSNumber*`’s and raw integers.

<a id="Missing-Noescape-Annotation"></a>

### Missing Noescape Annotation

**Setting name:** `CLANG_WARN_MISSING_NOESCAPE`

Warn about noescape annotations that are missing in a method’s signature.

<a id="Implicit-Non-Literal-Null-Conversions"></a>

### Implicit Non-Literal Null Conversions

**Setting name:** `CLANG_WARN_NON_LITERAL_NULL_CONVERSION`

Warn about non-literal expressions that evaluate to zero being treated as a null pointer.

<a id="Incorrect-Uses-of-Nullable-Values"></a>

### Incorrect Uses of Nullable Values

**Setting name:** `CLANG_WARN_NULLABLE_TO_NONNULL_CONVERSION`

Warns when a nullable expression is used somewhere it’s not allowed, such as when passed as a `_Nonnull` parameter.

<a id="Implicit-ownership-types-on-out-parameters"></a>

### Implicit ownership types on out parameters

**Setting name:** `CLANG_WARN_OBJC_EXPLICIT_OWNERSHIP_TYPE`

Warn about implicit ownership types on Objective-C object references as out parameters. For example, declaring a parameter with type `NSObject**` will produce a warning because the compiler will assume that the out parameter’s ownership type is `__autoreleasing`.

<a id="Implicit-Atomic-Objective-C-Properties"></a>

### Implicit Atomic Objective-C Properties

**Setting name:** `CLANG_WARN_OBJC_IMPLICIT_ATOMIC_PROPERTIES`

Warn about `@property` declarations that are implicitly atomic.

<a id="Implicit-retain-of-self-within-blocks"></a>

### Implicit retain of ‘self’ within blocks

**Setting name:** `CLANG_WARN_OBJC_IMPLICIT_RETAIN_SELF`

Warn about implicit retains of `self` within blocks, which can create a retain-cycle.

<a id="Interface-Declarations-of-Instance-Variables"></a>

### Interface Declarations of Instance Variables

**Setting name:** `CLANG_WARN_OBJC_INTERFACE_IVARS`

Warn about instance variable declarations in `@interface`.

<a id="Implicit-Objective-C-Literal-Conversions"></a>

### Implicit Objective-C Literal Conversions

**Setting name:** `CLANG_WARN_OBJC_LITERAL_CONVERSION`

Warn about implicit conversions from Objective-C literals to values of incompatible type.

<a id="Implicit-Synthesized-Properties"></a>

### Implicit Synthesized Properties

**Setting name:** `CLANG_WARN_OBJC_MISSING_PROPERTY_SYNTHESIS`

Starting in Xcode 4.4, Apple Clang will implicitly synthesize properties that are not explicitly synthesized using `@synthesize`. This setting warns about such implicit behavior, even though the property is still synthesized. This is essentially a backwards compatibility warning, or for those who wish to continue to explicitly use `@synthesize`.

<a id="Repeatedly-using-a-weak-reference"></a>

### Repeatedly using a \__weak reference

**Setting name:** `CLANG_WARN_OBJC_REPEATED_USE_OF_WEAK`

Warn about repeatedly using a weak reference without assigning the weak reference to a strong reference. This is often symptomatic of a race condition where the weak reference can become `nil` between accesses, resulting in unexpected behavior. Assigning to temporary strong reference ensures the object stays alive during the related accesses.

<a id="Unintentional-Root-Class"></a>

### Unintentional Root Class

**Setting name:** `CLANG_WARN_OBJC_ROOT_CLASS`

Warn about classes that unintentionally do not subclass a root class, such as `NSObject`.

<a id="Suspicious-Pragma-Pack"></a>

### Suspicious Pragma Pack

**Setting name:** `CLANG_WARN_PRAGMA_PACK`

Warn when a translation unit is missing terminating ‘#pragma pack (pop)’ directives or when the ‘#pragma pack’ state immediately after an #include is different from the state immediately before.

<a id="Outdated-Private-Module-Map"></a>

### Outdated Private Module Map

**Setting name:** `CLANG_WARN_PRIVATE_MODULE`

Warn about private modules that do not use the recommended private module layout.

<a id="Quoted-Include-In-Framework-Header"></a>

### Quoted Include In Framework Header

**Setting name:** `CLANG_WARN_QUOTED_INCLUDE_IN_FRAMEWORK_HEADER`

Warns when a quoted include is used instead of a framework style include in a framework header.

<a id="Range-based-For-Loops"></a>

### Range-based For Loops

**Setting name:** `CLANG_WARN_RANGE_LOOP_ANALYSIS`

Warn about ranged-based for loops.

<a id="Semicolon-Before-Method-Body"></a>

### Semicolon Before Method Body

**Setting name:** `CLANG_WARN_SEMICOLON_BEFORE_METHOD_BODY`

Warn about ignored semicolon between a method implementation’s signature and body.

<a id="Strict-Prototypes"></a>

### Strict Prototypes

**Setting name:** `CLANG_WARN_STRICT_PROTOTYPES`

Warn about non-prototype declarations.

<a id="Suspicious-Implicit-Conversions"></a>

### Suspicious Implicit Conversions

**Setting name:** `CLANG_WARN_SUSPICIOUS_IMPLICIT_CONVERSION`

Warn about various implicit conversions that can lose information or are otherwise suspicious.

<a id="Suspicious-Moves"></a>

### Suspicious Moves

**Setting name:** `CLANG_WARN_SUSPICIOUS_MOVE`

Warn about suspicious uses of `std::move`.

<a id="Unguarded-availability"></a>

### Unguarded availability

**Setting name:** `CLANG_WARN_UNGUARDED_AVAILABILITY`

Warn if an API that is newer than the deployment target is used without “if (@available(…))” guards.

<a id="Unreachable-Code"></a>

### Unreachable Code

**Setting name:** `CLANG_WARN_UNREACHABLE_CODE`

Warns about potentially unreachable code.

<a id="Ambiguous-C++-Parsing-Situation"></a>

### Ambiguous C++ Parsing Situation

**Setting name:** `CLANG_WARN_VEXING_PARSE`

Warn about a parsing ambiguity between a variable declaration and a function-style cast.

<a id="Using-bridge-Casts-Outside-of-ARC"></a>

### Using \__bridge Casts Outside of ARC

**Setting name:** `CLANG_WARN__ARC_BRIDGE_CAST_NONARC`

Warn about using `__bridge` casts when not using ARC, where they have no effect.

<a id="Duplicate-Method-Definitions"></a>

### Duplicate Method Definitions

**Setting name:** `CLANG_WARN__DUPLICATE_METHOD_MATCH`

Warn about declaring the same method more than once within the same `@interface`.

<a id="Exit-Time-C++-Destructors"></a>

### Exit-Time C++ Destructors

**Setting name:** `CLANG_WARN__EXIT_TIME_DESTRUCTORS`

Warn about destructors for C++ objects that are called when an application is terminating.

<a id="Enable-Additional-Vector-Extensions"></a>

### Enable Additional Vector Extensions

**Setting name:** `CLANG_X86_VECTOR_INSTRUCTIONS`

Enables the use of extended vector instructions. Only used when targeting Intel architectures.

<a id="Code-Signing-Entitlements"></a>

### Code Signing Entitlements

**Setting name:** `CODE_SIGN_ENTITLEMENTS`

The path to a file specifying code-signing entitlements.

<a id="Code-Signing-Identity"></a>

### Code Signing Identity

**Setting name:** `CODE_SIGN_IDENTITY`

The name, also known as the *common name*, of a valid code-signing certificate in a keychain within your keychain path. A missing or invalid certificate will cause a build error.

<a id="Code-Signing-Inject-Base-Entitlements"></a>

### Code Signing Inject Base Entitlements

**Setting name:** `CODE_SIGN_INJECT_BASE_ENTITLEMENTS`

Automatically inject entitlements from the platform’s BaseEntitlements.plist into the code signatures of executables.

<a id="Code-Sign-Style"></a>

### Code Sign Style

**Setting name:** `CODE_SIGN_STYLE`

This setting specifies the method used to acquire and locate signing assets. Choose `Automatic` to let Xcode automatically create and update profiles, app IDs, and certificates. Choose `Manual` to create and update these yourself on the developer website.

<a id="COMBINEHIDPIIMAGES"></a>

### COMBINE_HIDPI_IMAGES

**Setting name:** `COMBINE_HIDPI_IMAGES`

Combines image files at different resolutions into one multi-page TIFF file that is HiDPI compliant for macOS 10.7 and later. Only image files in the same directory and with the same base name and extension are combined. The file names must conform to the naming convention used in HiDPI.

<a id="Enable-Compilation-Caching"></a>

### Enable Compilation Caching

**Setting name:** `COMPILATION_CACHE_ENABLE_CACHING`

Caches the results of compilations for a particular set of inputs.

<a id="Compilation-Caching-Diagnostic-Info"></a>

### Compilation Caching Diagnostic Info

**Setting name:** `COMPILATION_CACHE_ENABLE_DIAGNOSTIC_REMARKS`

Emits diagnostic information for cached compilation tasks.

<a id="Enable-Index-While-Building-Functionality"></a>

### Enable Index-While-Building Functionality

**Setting name:** `COMPILER_INDEX_STORE_ENABLE`

Control whether the compiler should emit index data while building.

<a id="Compress-PNG-Files"></a>

### Compress PNG Files

**Setting name:** `COMPRESS_PNG_FILES`

If enabled, PNG resource files are compressed as they are copied.

<a id="CONFIGURATION"></a>

### CONFIGURATION

**Setting name:** `CONFIGURATION`

Identifies the build configuration, such as `Debug` or `Release`, that the target uses to generate the product.

<a id="Per-configuration-Build-Products-Path"></a>

### Per-configuration Build Products Path

**Setting name:** `CONFIGURATION_BUILD_DIR`

The base path where build products will be placed during a build for a given configuration. By default, this is set to `$(BUILD_DIR)/$(CONFIGURATION)`.

<a id="Per-configuration-Intermediate-Build-Files-Path"></a>

### Per-configuration Intermediate Build Files Path

**Setting name:** `CONFIGURATION_TEMP_DIR`

The base path where intermediates will be placed during a build for a given configuration. By default, this is set to `$(PROJECT_TEMP_DIR)/$(CONFIGURATION)`.

<a id="CONTENTSFOLDERPATH"></a>

### CONTENTS_FOLDER_PATH

**Setting name:** `CONTENTS_FOLDER_PATH`

Specifies the directory inside the generated bundle that contains the product’s files.

<a id="Preserve-HFS-Data"></a>

### Preserve HFS Data

**Setting name:** `COPYING_PRESERVES_HFS_DATA`

Causes the copying of resources to preserve resource forks and Finder info.

<a id="Run-unifdef-on-Product-Headers"></a>

### Run unifdef on Product Headers

**Setting name:** `COPY_HEADERS_RUN_UNIFDEF`

If enabled, headers are run through the `unifdef(1)` tool when copied to the product.

<a id="Unifdef-Flags-for-Product-Headers"></a>

### Unifdef Flags for Product Headers

**Setting name:** `COPY_HEADERS_UNIFDEF_FLAGS`

Specifies the flags to pass to `unifdef(1)` when invoking that tool to copy headers. This setting has no effect unless `COPY_HEADERS_RUN_UNIFDEF` is enabled.

<a id="Strip-Debug-Symbols-During-Copy"></a>

### Strip Debug Symbols During Copy

**Setting name:** `COPY_PHASE_STRIP`

Specifies whether binary files that are copied during the build, such as in a Copy Bundle Resources or Copy Files build phase, should be stripped of debugging symbols. It does not cause the linked product of a target to be stripped—use `STRIP_INSTALLED_PRODUCT` for that.

<a id="CoreML-Model-Class-Generation-Language"></a>

### CoreML Model Class Generation Language

**Setting name:** `COREML_CODEGEN_LANGUAGE`

The Source-code language to use for generated CoreML model class.  By default “Automatic” will analyze your project to determine the correct language.  Adjust this setting to explicitly select “Swift” or “Objective-C”, or select “None” to disable model class generation.

<a id="CoreML-Generated-Model-Inherits-NSObject"></a>

### CoreML Generated Model Inherits NSObject

**Setting name:** `COREML_CODEGEN_SWIFT_GLOBAL_MODULE`

Generate Swift model classes that are marked with @objc and are descendants of NSObject, in order to be accessible and usable in Objective-C.  This setting has no effect if “CoreML Model Class Generation Language” is set to “Objective-C”.

<a id="Cpp-Other-Preprocessor-Flags"></a>

### Cpp Other Preprocessor Flags

**Setting name:** `CPP_OTHER_PREPROCESSOR_FLAGS`

Other flags to pass to the C preprocessor when using the standalone C Preprocessor rule.

<a id="Cpp-Preprocessor-Definitions"></a>

### Cpp Preprocessor Definitions

**Setting name:** `CPP_PREPROCESSOR_DEFINITIONS`

Space-separated list of preprocessor macros of the form `foo` or `foo=bar`. These macros are used when preprocessing using the standalone C Preprocessor rule.

<a id="Create-Infoplist-Section-in-Binary"></a>

### Create Info.plist Section in Binary

**Setting name:** `CREATE_INFOPLIST_SECTION_IN_BINARY`

Enabling this setting creates a section called `__info_plist` in the `__TEXT` segment of the product’s linked binary containing the processed `Info.plist` file for the target.

You can read the processed `Info.plist` file from the linked binary at runtime using the [CFBundle](https://developer.apple.com/documentation/corefoundation/cfbundle) and [NSBundle](https://developer.apple.com/documentation/foundation/nsbundle) (Objective-C) or [Bundle](https://developer.apple.com/documentation/foundation/nsbundle) (Swift) APIs. To print the processed `Info.plist` file, use the `plutil(1)` command-line utility.

This setting only applies to command-line tool targets.

<a id="CURRENTARCH"></a>

### CURRENT_ARCH

**Setting name:** `CURRENT_ARCH`

The name of the active architecture being processed.

<a id="Current-Project-Version"></a>

### Current Project Version

**Setting name:** `CURRENT_PROJECT_VERSION`

This setting defines the current version of the project. The value must be a integer or floating point number, such as `57` or `365.8`.

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [CFBundleVersion](https://developer.apple.com/documentation/bundleresources/information-property-list/cfbundleversion) key in the `Info.plist` file to the value of this build setting.

<a id="CURRENTVARIANT"></a>

### CURRENT_VARIANT

**Setting name:** `CURRENT_VARIANT`

The name of the active variant being processed.

<a id="Compiler-Launcher"></a>

### Compiler Launcher

**Setting name:** `C_COMPILER_LAUNCHER`

The path to a compiler launcher. This build setting causes the build system to invoke the launcher tool with the original compiler path and arguments. Examples include `distcc` and `ccache`. Don’t use the `CC`, `CPLUSPLUS`, `OBJCC`, or `OBJCPLUSPLUS` build settings to specify a compiler launcher.

<a id="Dead-Code-Stripping"></a>

### Dead Code Stripping

**Setting name:** `DEAD_CODE_STRIPPING`

Activating this setting causes the `-dead_strip` flag to be passed to `ld(1)` via `cc(1)` to turn on dead code stripping.

<a id="Debug-Information-Format"></a>

### Debug Information Format

**Setting name:** `DEBUG_INFORMATION_FORMAT`

The type of debug information to produce.

- *DWARF:* Object files and linked products will use DWARF as the debug information format. \[dwarf\]
- *DWARF with dSYM File:* Object files and linked products will use DWARF as the debug information format, and Xcode will also produce a dSYM file containing the debug information from the individual object files (except that a dSYM file is not needed and will not be created for static library or object file products). \[dwarf-with-dsym\]

<a id="Debug-Information-Version"></a>

### Debug Information Version

**Setting name:** `DEBUG_INFORMATION_VERSION`

The format of the debug information to produce.

- *Compiler Default*: The compiler will emit debug information of a version appropriate for the platform and minimum deployment target being built. \[compiler-default\]
- *DWARF 4*: The compiler will emit DWARF 4 debug information. \[dwarf4\]
- *DWARF 5*: The compiler will emit DWARF 5 debug information. \[dwarf5\]

<a id="Defines-Module"></a>

### Defines Module

**Setting name:** `DEFINES_MODULE`

If enabled, the product will be treated as defining its own module. This enables automatic production of LLVM module map files when appropriate, and allows the product to be imported as a module.

<a id="Deployment-Location"></a>

### Deployment Location

**Setting name:** `DEPLOYMENT_LOCATION`

If enabled, built products are placed in their installed locations in addition to the built products folder.

<a id="Deployment-Postprocessing"></a>

### Deployment Postprocessing

**Setting name:** `DEPLOYMENT_POSTPROCESSING`

If enabled, indicates that binaries should be stripped and file mode, owner, and group information should be set to standard values.

<a id="Deployment-Target-Build-Setting-Name"></a>

### Deployment Target Build Setting Name

**Setting name:** `DEPLOYMENT_TARGET_SETTING_NAME`

The name of the build setting for the deployment target for the effective platform. This can be used to evaluate the build setting using build setting interpolation without hard-coding the name, e.g. `$($(DEPLOYMENT_TARGET_SETTING_NAME))`, or to compose the names of other settings which contain its name, such as the `RECOMMENDED_<platform>_DEPLOYMENT_TARGET` settings.

<a id="DERIVEDFILEDIR"></a>

### DERIVED_FILE_DIR

**Setting name:** `DERIVED_FILE_DIR`

Identifies the directory into which derived source files, such as those generated by `lex` and `yacc`, are placed.

<a id="Derive-Mac-Catalyst-Product-Bundle-Identifier"></a>

### Derive Mac Catalyst Product Bundle Identifier

**Setting name:** `DERIVE_MACCATALYST_PRODUCT_BUNDLE_IDENTIFIER`

When enabled, Xcode will automatically derive a bundle identifier for this target from its original bundle identifier when it’s building for Mac Catalyst.

<a id="Development-Assets"></a>

### Development Assets

**Setting name:** `DEVELOPMENT_ASSET_PATHS`

Files and directories used only for development. Archive and install builds will exclude this content.

<a id="Development-Team"></a>

### Development Team

**Setting name:** `DEVELOPMENT_TEAM`

The team ID of a development team to use for signing certificates and provisioning profiles.

<a id="Build-Documentation-for-C++Objective-C++"></a>

### Build Documentation for C++/Objective-C++

**Setting name:** `DOCC_ENABLE_CXX_SUPPORT`

Include documentation for symbols defined in C++/Objective-C++ headers.

<a id="Include-Documentation-for-Symbols-in-Swift-Extensions"></a>

### Include Documentation for Symbols in Swift Extensions

**Setting name:** `DOCC_EXTRACT_EXTENSION_SYMBOLS`

Extract Swift symbol information for symbols defined within an extension to a type that is not defined in the current module.

<a id="Build-Multi-Language-Documentation-for-Swift-Only-Targets"></a>

### Build Multi-Language Documentation for Swift Only Targets

**Setting name:** `DOCC_EXTRACT_OBJC_INFO_FOR_SWIFT_SYMBOLS`

Extract Objective-C symbol information for targets that contain only Swift code so that the documentation output can be read as both Swift and Objective-C.

<a id="Build-Multi-Language-Documentation-for-Objective-C-Only-Targets"></a>

### Build Multi-Language Documentation for Objective-C Only Targets

**Setting name:** `DOCC_EXTRACT_SWIFT_INFO_FOR_OBJC_SYMBOLS`

Extract Swift symbol information for targets that contain only Objective-C code so that the documentation output can be read as both Swift and Objective-C.

<a id="DocC-Archive-Hosting-Base-Path"></a>

### DocC Archive Hosting Base Path

**Setting name:** `DOCC_HOSTING_BASE_PATH`

The base path your documentation website will be hosted at. For example, if you plan on hosting your DocC archive at `https://example.com/ProjectName/documentation` instead of `https://example.com/documentation`, set this value to `"ProjectName"`.

<a id="DOCUMENTATIONFOLDERPATH"></a>

### DOCUMENTATION_FOLDER_PATH

**Setting name:** `DOCUMENTATION_FOLDER_PATH`

Identifies the directory that contains the bundle’s documentation files.

<a id="Dont-Force-Infoplist-Generation"></a>

### Don’t Force Info.plist Generation

**Setting name:** `DONT_GENERATE_INFOPLIST_FILE`

If enabled, don’t automatically generate an Info.plist file for wrapped products when the `INFOPLIST_FILE` build setting is empty.

<a id="Installation-Build-Products-Location"></a>

### Installation Build Products Location

**Setting name:** `DSTROOT`

The path at which all products will be rooted when performing an install build. For instance, to install your products on the system proper, set this path to `/`. Defaults to `/tmp/$(PROJECT_NAME).dst` to prevent a *test* install build from accidentally overwriting valid and needed data in the ultimate install path.

Typically this path is not set per target, but is provided as an option on the command line when performing an `xcodebuild install`. It may also be set in a build configuration in special circumstances.

<a id="DSYMUTILEMBEDRESOURCES"></a>

### DSYMUTIL_EMBED_RESOURCES

**Setting name:** `DSYMUTIL_EMBED_RESOURCES`

A list of resources to embed into the dSYM bundle. Each entry has the form ‘=’ where the source path is a file or directory on disk and the destination path is relative to the bundle’s Contents/Resources directory.

<a id="Other-DTrace-Flags"></a>

### Other DTrace Flags

**Setting name:** `DTRACE_OTHER_FLAGS`

Space-separated list of additional flags to pass to the `dtrace` compiler. Be sure to backslash-escape any arguments that contain spaces or special characters, such as path names that may contain spaces. Use this setting if Xcode does not already provide UI for a particular `dtrace` flag.

<a id="Compatibility-Version"></a>

### Compatibility Version

**Setting name:** `DYLIB_COMPATIBILITY_VERSION`

Determines the compatibility version of the resulting library, bundle, or framework binary. See [Dynamic Library Design Guidelines](https://developer.apple.com/library/content/documentation/DeveloperTools/Conceptual/DynamicLibraries/100-Articles/DynamicLibraryDesignGuidelines.html#//apple_ref/doc/uid/TP40002013-SW19) in [Dynamic Library Programming Topics](https://developer.apple.com/library/content/documentation/DeveloperTools/Conceptual/DynamicLibraries/000-Introduction/Introduction.html) for details on assigning version numbers of dynamic libraries.

<a id="Current-Library-Version"></a>

### Current Library Version

**Setting name:** `DYLIB_CURRENT_VERSION`

This setting defines the current version of any framework built by the project. As with `CURRENT_PROJECT_VERSION`, the value must be an integer or floating point number, such as `57` or `365.8`. See [Dynamic Library Design Guidelines](https://developer.apple.com/library/content/documentation/DeveloperTools/Conceptual/DynamicLibraries/100-Articles/DynamicLibraryDesignGuidelines.html#//apple_ref/doc/uid/TP40002013-SW19) in [Dynamic Library Programming Topics](https://developer.apple.com/library/content/documentation/DeveloperTools/Conceptual/DynamicLibraries/000-Introduction/Introduction.html) for details on assigning version numbers of dynamic libraries.

<a id="Dynamic-Library-Install-Name-Base"></a>

### Dynamic Library Install Name Base

**Setting name:** `DYLIB_INSTALL_NAME_BASE`

Sets the base value for the internal `install path` (`LC_ID_DYLIB`) in a dynamic library. This will be combined with the `EXECUTABLE_PATH` to form the full install path. Setting `LD_DYLIB_INSTALL_NAME` directly will override this setting. This setting defaults to the target’s `INSTALL_PATH`. It is ignored when building any product other than a dynamic library.

<a id="Eager-Linking"></a>

### Eager Linking

**Setting name:** `EAGER_LINKING`

If enabled, the build system will emit a TBD file for Swift-only framework and dynamic library targets to unblock linking of dependent targets before their dependency has finished linking.

<a id="Embed-Asset-Packs-In-Product-Bundle"></a>

### Embed Asset Packs In Product Bundle

**Setting name:** `EMBED_ASSET_PACKS_IN_PRODUCT_BUNDLE`

Embed all the built asset packs inside the product bundle. Since this negates the performance benefits of the On Demand Resources feature, it is only useful for testing purposes when it isn’t practical to use an asset pack server.

<a id="Enable-App-Sandbox"></a>

### Enable App Sandbox

**Setting name:** `ENABLE_APP_SANDBOX`

When set, enables App Sandbox for a target.

<a id="Enable-Code-Coverage-Support"></a>

### Enable Code Coverage Support

**Setting name:** `ENABLE_CODE_COVERAGE`

Enables building with code coverage instrumentation. This is only used when the build has code coverage enabled, which is typically done via the Xcode scheme or test plan settings.

<a id="Enforce-Bounds-Safe-Buffer-Usage-in-C++"></a>

### Enforce Bounds-Safe Buffer Usage in C++

**Setting name:** `ENABLE_CPLUSPLUS_BOUNDS_SAFE_BUFFERS`

Enables a strict programming model that guarantees bounds safety in C++ by rejecting raw pointer arithmetic (enabling the -Wunsafe-buffer-usage warning as an error) and requiring the use of hardened C++ Standard Library APIs for buffer manipulation.

<a id="Enable-Language-Extension-for-Bounds-Safety-in-C"></a>

### Enable Language Extension for Bounds Safety in C

**Setting name:** `ENABLE_C_BOUNDS_SAFETY`

Enables the -fbounds-safety language extension, which guarantees bounds safety for C.

<a id="Enable-Debug-Dylib-Support"></a>

### Enable Debug Dylib Support

**Setting name:** `ENABLE_DEBUG_DYLIB`

If enabled, debug builds of app and app extension targets on supported platforms and SDKs will be built with the main binary code in a separate “NAME.debug.dylib”. A stub executor that loads the dylib will be the main binary. Enabling this setting is required for the previews execution engine and other modern development features to work. You can disable this setting if your target is not compatible.

<a id="Enable-Enhanced-Security"></a>

### Enable Enhanced Security

**Setting name:** `ENABLE_ENHANCED_SECURITY`

Enables a set of security build settings, including pointer authentication, typed allocator support, hardened C++ standard library, and security-related compiler warnings. These settings can be disabled individually.

<a id="Enable-Downloads-Folder"></a>

### Enable Downloads Folder

**Setting name:** `ENABLE_FILE_ACCESS_DOWNLOADS_FOLDER`

This setting indicates whether App Sandbox allows access to files in the user’s downloads directory.

<a id="Enable-Movies-Folder"></a>

### Enable Movies Folder

**Setting name:** `ENABLE_FILE_ACCESS_MOVIES_FOLDER`

This setting indicates whether App Sandbox allows access to files in the user’s movies directory.

<a id="Enable-Music-Folder"></a>

### Enable Music Folder

**Setting name:** `ENABLE_FILE_ACCESS_MUSIC_FOLDER`

This setting indicates whether App Sandbox allows access to files in the user’s music directory.

<a id="Enable-Pictures-Folder"></a>

### Enable Pictures Folder

**Setting name:** `ENABLE_FILE_ACCESS_PICTURE_FOLDER`

This setting indicates whether App Sandbox allows access to files in the user’s pictures directory.

<a id="Enable-Hardened-Runtime"></a>

### Enable Hardened Runtime

**Setting name:** `ENABLE_HARDENED_RUNTIME`

Enable hardened runtime restrictions.

<a id="Enable-Hardware-Checked-Pointer-Arithmetic-Slice"></a>

### Enable Hardware-Checked Pointer Arithmetic Slice

**Setting name:** `ENABLE_HARDWARE_CHECKED_POINTER_ARITHMETIC_SLICE`

Builds the target with hardware-checked pointer arithmetic enabled. Adds an additional architectural slice (arm64e.x1) with hardware-checked pointer arithmetic instructions to `ARCHS_STANDARD`. Has no effect if `ARCHS` has been overridden to not be based on `ARCHS_STANDARD`.

<a id="ENABLEHEADERDEPENDENCIES"></a>

### ENABLE_HEADER_DEPENDENCIES

**Setting name:** `ENABLE_HEADER_DEPENDENCIES`

Specifies whether to automatically track dependencies on included header files.

<a id="Incoming-Connections-Server"></a>

### Incoming Connections (Server)

**Setting name:** `ENABLE_INCOMING_NETWORK_CONNECTIONS`

When set, enables incoming network connections.

<a id="Enable-Incremental-Distill"></a>

### Enable Incremental Distill

**Setting name:** `ENABLE_INCREMENTAL_DISTILL`

Enabled the incremental `distill` option in the asset catalog compiler. This feature is experimental and should only be enabled with caution.

<a id="Enable-Module-Verifier"></a>

### Enable Module Verifier

**Setting name:** `ENABLE_MODULE_VERIFIER`

Enables clang module verification for frameworks.

<a id="Enable-Foundation-Assertions"></a>

### Enable Foundation Assertions

**Setting name:** `ENABLE_NS_ASSERTIONS`

Controls whether assertion logic provided by `NSAssert` is included in the preprocessed source code or is elided during preprocessing. Disabling assertions can improve code performance.

<a id="Build-Active-Resources-Only"></a>

### Build Active Resources Only

**Setting name:** `ENABLE_ONLY_ACTIVE_RESOURCES`

Omit inapplicable resources when building for a single device. For example, when building for a device with a Retina display, exclude 1x resources.

<a id="Enable-On-Demand-Resources"></a>

### Enable On Demand Resources

**Setting name:** `ENABLE_ON_DEMAND_RESOURCES`

If enabled, tagged assets—files and asset catalog entries—are built into asset packs based on their combination of tags. Untagged resources are treated normally.

<a id="Outgoing-Connections-Client"></a>

### Outgoing Connections (Client)

**Setting name:** `ENABLE_OUTGOING_NETWORK_CONNECTIONS`

When set, enables outgoing network connections.

<a id="Enable-Pointer-Authentication"></a>

### Enable Pointer Authentication

**Setting name:** `ENABLE_POINTER_AUTHENTICATION`

Builds the target with pointer authentication enabled. Adds an additional architectural slice (arm64e) with pointer authentication instructions to `ARCHS_STANDARD`. Has no effect if `ARCHS` has been overridden to not be based on `ARCHS_STANDARD`

<a id="Audio-Input"></a>

### Audio Input

**Setting name:** `ENABLE_RESOURCE_ACCESS_AUDIO_INPUT`

When set, enables capture of audio with the built-in and external microphones.

<a id="Bluetooth"></a>

### Bluetooth

**Setting name:** `ENABLE_RESOURCE_ACCESS_BLUETOOTH`

When set, enables communication with connected Bluetooth devices.

<a id="Calendar"></a>

### Calendar

**Setting name:** `ENABLE_RESOURCE_ACCESS_CALENDARS`

When set, enables read-write access to the user’s calendar.

<a id="Camera"></a>

### Camera

**Setting name:** `ENABLE_RESOURCE_ACCESS_CAMERA`

When set, enables capture of images and movies with the built-in and external cameras.

<a id="Contacts"></a>

### Contacts

**Setting name:** `ENABLE_RESOURCE_ACCESS_CONTACTS`

When set, enables read-write access to the user’s Contacts database.

<a id="Location"></a>

### Location

**Setting name:** `ENABLE_RESOURCE_ACCESS_LOCATION`

When set, enables access to determine the user’s location using Location Services.

<a id="Photos-Library"></a>

### Photos Library

**Setting name:** `ENABLE_RESOURCE_ACCESS_PHOTO_LIBRARY`

A Boolean value that indicates whether the app has read-write access to the user’s Photos library.

<a id="Printing"></a>

### Printing

**Setting name:** `ENABLE_RESOURCE_ACCESS_PRINTING`

When set, enables access to print documents and media using the system’s configured printers.

<a id="USB"></a>

### USB

**Setting name:** `ENABLE_RESOURCE_ACCESS_USB`

When set, enables communication with connected USB devices.

<a id="Enable-Security-Relevant-Compiler-Warnings"></a>

### Enable Security-Relevant Compiler Warnings

**Setting name:** `ENABLE_SECURITY_COMPILER_WARNINGS`

Enables a set of security-relevant compiler warnings that check for common bounds-safety and lifetime-safety issues.

<a id="Enable-Strict-Checking-of-objcmsgSend-Calls"></a>

### Enable Strict Checking of objc_msgSend Calls

**Setting name:** `ENABLE_STRICT_OBJC_MSGSEND`

Controls whether `objc_msgSend` calls must be cast to the appropriate function pointer type before being called.

<a id="Enable-Testability"></a>

### Enable Testability

**Setting name:** `ENABLE_TESTABILITY`

Enabling this setting will build the target with options appropriate for running automated tests against its product.

This setting can be enabled when building targets for debugging if their products will be tested. This may result in tests running slower than otherwise.

When this setting is enabled:

- `GCC_SYMBOLS_PRIVATE_EXTERN` is disabled (`-fvisibility=hidden` will not be passed to `clang`).
- `-enable-testing` is passed to the Swift compiler.
- `-rdynamic` is passed to the linker.
- `STRIP_INSTALLED_PRODUCT` is disabled (`strip` will not be run on the produced binary).

<a id="Enable-Testing-Search-Paths"></a>

### Enable Testing Search Paths

**Setting name:** `ENABLE_TESTING_SEARCH_PATHS`

Specifies whether the build system should add the search paths necessary for compiling and linking against testing-related libraries or frameworks. This setting is enabled by default if the target is a test target or if the target explicitly links to the Testing, XCTest, or StoreKitTest frameworks.

<a id="User-Script-Sandboxing"></a>

### User Script Sandboxing

**Setting name:** `ENABLE_USER_SCRIPT_SANDBOXING`

If enabled, the build system will sandbox user scripts to disallow undeclared input/output dependencies.

<a id="Enable-User-Selected-Files"></a>

### Enable User Selected Files

**Setting name:** `ENABLE_USER_SELECTED_FILES`

This setting indicates whether App Sandbox allows access to files the user selects with an Open or Save dialog.

<a id="Excluded-Architectures"></a>

### Excluded Architectures

**Setting name:** `EXCLUDED_ARCHS`

A list of architectures for which the target should not be built. These architectures will be removed from the list in `ARCHS` when the target is built. If the resulting list of architectures is empty, no binary will be produced. This can be used to declare architectures a target does not support for use in environments where `ARCHS` is being overridden at a higher level (e.g., via `xcodebuild`).

<a id="Excluded-Explicit-Target-Dependencies"></a>

### Excluded Explicit Target Dependencies

**Setting name:** `EXCLUDED_EXPLICIT_TARGET_DEPENDENCIES`

A list of patterns (as defined by `fnmatch(3)`) specifying the names of explicit target dependencies to *exclude* when determining which targets to build (see also `INCLUDED_EXPLICIT_TARGET_DEPENDENCIES`). This setting can be used to define complex filters for which targets should be built in response to other build settings.

<a id="Sub-Directories-to-Exclude-in-Recursive-Searches"></a>

### Sub-Directories to Exclude in Recursive Searches

**Setting name:** `EXCLUDED_RECURSIVE_SEARCH_PATH_SUBDIRECTORIES`

This is a list of `fnmatch()`-style patterns of file or directory names to exclude when performing a recursive search. By default, this is set to `*.nib *.lproj *.framework *.gch *.xcode* *.xcassets *.icon (*) .DS_Store CVS .svn .git .hg *.pbproj *.pbxproj`. Normally, if you override this value you should include the default values via the `$(inherited)` macro.

<a id="Excluded-Source-File-Names"></a>

### Excluded Source File Names

**Setting name:** `EXCLUDED_SOURCE_FILE_NAMES`

A list of patterns (as defined by `fnmatch(3)`) specifying the names of source files to explicitly *exclude* when processing the files in the target’s build phases (see also `INCLUDED_SOURCE_FILE_NAMES`). This setting can be used to define complex filters for which files from the phase should be built in response to other build settings; for example, a value of `*.$(CURRENT_ARCH).c` could serve to exclude particular files based on the architecture being built.

<a id="EXECUTABLESFOLDERPATH"></a>

### EXECUTABLES_FOLDER_PATH

**Setting name:** `EXECUTABLES_FOLDER_PATH`

Identifies the directory that contains additional binary files.

<a id="Executable-Extension"></a>

### Executable Extension

**Setting name:** `EXECUTABLE_EXTENSION`

This is the extension used for the executable product generated by the target, which has a default value based on the product type.

<a id="EXECUTABLEFOLDERPATH"></a>

### EXECUTABLE_FOLDER_PATH

**Setting name:** `EXECUTABLE_FOLDER_PATH`

Identifies the directory that contains the binary the target builds.

<a id="EXECUTABLENAME"></a>

### EXECUTABLE_NAME

**Setting name:** `EXECUTABLE_NAME`

Specifies the name of the binary the target produces.

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [CFBundleExecutable](https://developer.apple.com/documentation/bundleresources/information-property-list/cfbundleexecutable) key in the `Info.plist` file to the value of this build setting.

<a id="EXECUTABLEPATH"></a>

### EXECUTABLE_PATH

**Setting name:** `EXECUTABLE_PATH`

Specifies the path to the binary the target produces within its bundle.

<a id="Executable-Prefix"></a>

### Executable Prefix

**Setting name:** `EXECUTABLE_PREFIX`

The prefix used for the executable product generated by the target, which has a default value based on the product type.

<a id="EXECUTABLESUFFIX"></a>

### EXECUTABLE_SUFFIX

**Setting name:** `EXECUTABLE_SUFFIX`

Specifies the suffix of the binary filename, including the character that separates the extension from the rest of the bundle name.

<a id="Exported-Symbols-File"></a>

### Exported Symbols File

**Setting name:** `EXPORTED_SYMBOLS_FILE`

This is a project-relative path to a file that lists the symbols to export. See `ld -exported_symbols_list` for details on exporting symbols.

<a id="FRAMEWORKSFOLDERPATH"></a>

### FRAMEWORKS_FOLDER_PATH

**Setting name:** `FRAMEWORKS_FOLDER_PATH`

Specifies the directory that contains the product’s embedded frameworks.

<a id="Framework-Search-Paths"></a>

### Framework Search Paths

**Setting name:** `FRAMEWORK_SEARCH_PATHS`

This is a list of paths to folders containing frameworks to be searched by the compiler for both included or imported header files when compiling C, Objective-C, C++, or Objective-C++, and by the linker for frameworks used by the product. Paths are delimited by whitespace, so any paths with spaces in them must be properly quoted.

<a id="Framework-Version"></a>

### Framework Version

**Setting name:** `FRAMEWORK_VERSION`

Framework bundles are versioned by having contents in subfolders of a version folder that has links to the current version and its contents.

<a id="Run-Build-Script-Phases-in-Parallel"></a>

### Run Build Script Phases in Parallel

**Setting name:** `FUSE_BUILD_SCRIPT_PHASES`

If enabled, consecutive run script phases will be allowed to run in parallel if they fully specify their input and output dependencies.

<a id="char-Type-Is-Unsigned"></a>

### ‘char’ Type Is Unsigned

**Setting name:** `GCC_CHAR_IS_UNSIGNED_CHAR`

Enabling this setting causes `char` to be unsigned by default, disabling it causes `char` to be signed by default.

<a id="CodeWarriorMS-Style-Inline-Assembly"></a>

### CodeWarrior/MS-Style Inline Assembly

**Setting name:** `GCC_CW_ASM_SYNTAX`

Enable the CodeWarrior/Microsoft syntax for inline assembly code in addition to the standard GCC syntax.

<a id="C-Language-Dialect"></a>

### C Language Dialect

**Setting name:** `GCC_C_LANGUAGE_STANDARD`

Choose a standard or non-standard C language dialect.

- *ANSI C:* Accept ISO C90 and ISO C++, turning off GNU extensions that are incompatible. \[-ansi\] Incompatible GNU extensions include the `asm`, `inline`, and `typeof` keywords (but not the equivalent `__asm__`, `__inline__`, and `__typeof__` forms), and the `//` syntax for comments. This setting also enables trigraphs.
- *C89:* Accept ISO C90 (1990), but not GNU extensions. \[-std=c89\]
- *GNU89:* Accept ISO C90 and GNU extensions. \[-std=gnu89\]
- *C99:* Accept ISO C99 (1999), but not GNU extensions. \[-std=c99\]
- *GNU99:* Accept ISO C99 and GNU extensions. \[-std=gnu99\]
- *C11:* Accept ISO C11 (2011), but not GNU extensions. \[-std=c11\]
- *GNU11:* Accept ISO C11 and GNU extensions. \[-std=gnu11\]
- *C17:* Accept ISO C17 (2018), but not GNU extensions. \[-std=c17\]
- *GNU17:* Accept ISO C17 and GNU extensions. \[-std=gnu17\]
- *C23:* Accept ISO C23 (2024), but not GNU extensions. \[-std=c23\]
- *GNU23:* Accept ISO C23 and GNU extensions. \[-std=gnu23\]
- *Compiler Default:* Tells the compiler to use its default C language dialect. This is normally the best choice unless you have specific needs. (Currently equivalent to GNU99.)

<a id="Generate-Position-Dependent-Code"></a>

### Generate Position-Dependent Code

**Setting name:** `GCC_DYNAMIC_NO_PIC`

Faster function calls for applications. Not appropriate for shared libraries, which need to be position-independent.

<a id="Allow-asm-inline-typeof"></a>

### Allow ‘asm’, ‘inline’, ‘typeof’

**Setting name:** `GCC_ENABLE_ASM_KEYWORD`

Controls whether `asm`, `inline`, and `typeof` are treated as keywords or whether they can be used as identifiers.

<a id="Recognize-Builtin-Functions"></a>

### Recognize Builtin Functions

**Setting name:** `GCC_ENABLE_BUILTIN_FUNCTIONS`

Controls whether builtin functions that do not begin with `__builtin_` as prefix are recognized.

GCC normally generates special code to handle certain builtin functions more efficiently; for instance, calls to `alloca` may become single instructions that adjust the stack directly, and calls to `memcpy` may become inline copy loops. The resulting code is often both smaller and faster, but since the function calls no longer appear as such, you cannot set a breakpoint on those calls, nor can you change the behavior of the functions by linking with a different library. In addition, when a function is recognized as a builtin function, GCC may use information about that function to warn about problems with calls to that function, or to generate more efficient code, even if the resulting code still contains calls to that function. For example, warnings are given with `-Wformat` for bad calls to `printf`, when `printf` is built in, and `strlen` is known not to modify global memory.

<a id="Enable-C++-Exceptions"></a>

### Enable C++ Exceptions

**Setting name:** `GCC_ENABLE_CPP_EXCEPTIONS`

Enable C++ exception handling. Generates extra code needed to propagate exceptions. For some targets, this implies GCC will generate frame unwind information for all functions, which can produce significant data size overhead, although it does not affect execution. If you do not specify this option, GCC will enable it by default for languages like C++ that normally require exception handling, and disable it for languages like C that do not normally require it. However, you may need to enable this option when compiling C code that needs to interoperate properly with exception handlers written in C++.

<a id="Enable-C++-Runtime-Types"></a>

### Enable C++ Runtime Types

**Setting name:** `GCC_ENABLE_CPP_RTTI`

Enable generation of information about every class with virtual functions for use by the C++ runtime type identification features (`dynamic_cast` and `typeid`). If you don’t use those parts of the language, you can save some space by using this flag. Note that exception handling uses the same information, but it will generate it as needed.

<a id="Enable-Exceptions"></a>

### Enable Exceptions

**Setting name:** `GCC_ENABLE_EXCEPTIONS`

Enable exception handling. Generates extra code needed to propagate exceptions. For some targets, this implies GCC will generate frame unwind information for all functions, which can produce significant data size overhead, although it does not affect execution. If you do not specify this option, GCC will enable it by default for languages like C++ and Objective-C that normally require exception handling, and disable it for languages like C that do not normally require it. However, you may need to enable this option when compiling C code that needs to interoperate properly with exception handlers written in other languages. You may also wish to disable this option if you are compiling older programs that don’t use exception handling.

<a id="Generate-Floating-Point-Library-Calls"></a>

### Generate Floating Point Library Calls

**Setting name:** `GCC_ENABLE_FLOATING_POINT_LIBRARY_CALLS`

Generate output containing library calls for floating point.

<a id="Kernel-Development-Mode"></a>

### Kernel Development Mode

**Setting name:** `GCC_ENABLE_KERNEL_DEVELOPMENT`

Activating this setting enables kernel development mode.

<a id="Enable-Objective-C-Exceptions"></a>

### Enable Objective-C Exceptions

**Setting name:** `GCC_ENABLE_OBJC_EXCEPTIONS`

This setting enables `@try`/`@catch`/`@throw` syntax for handling exceptions in Objective-C code. Only applies to Objective-C. \[-fobjc-exceptions\]

<a id="Recognize-Pascal-Strings"></a>

### Recognize Pascal Strings

**Setting name:** `GCC_ENABLE_PASCAL_STRINGS`

Recognize and construct Pascal-style string literals. Its use in new code is discouraged.

Pascal string literals take the form `"\pstring"` . The special escape sequence `\p` denotes the Pascal length byte for the string, and will be replaced at compile time with the number of characters that follow. The `\p` may only appear at the beginning of a string literal, and may not appear in wide string literals or as an integral constant.

<a id="Enable-SSE3-Extensions"></a>

### Enable SSE3 Extensions

**Setting name:** `GCC_ENABLE_SSE3_EXTENSIONS`

Specifies whether the binary uses the builtin functions that provide access to the SSE3 extensions to the IA-32 architecture.

<a id="Enable-SSE41-Extensions"></a>

### Enable SSE4.1 Extensions

**Setting name:** `GCC_ENABLE_SSE41_EXTENSIONS`

Specifies whether the binary uses the builtin functions that provide access to the SSE4.1 extensions to the IA-32 architecture.

<a id="Enable-SSE42-Extensions"></a>

### Enable SSE4.2 Extensions

**Setting name:** `GCC_ENABLE_SSE42_EXTENSIONS`

Specifies whether the binary uses the builtin functions that provide access to the SSE4.2 extensions to the IA-32 architecture.

<a id="Enable-Trigraphs"></a>

### Enable Trigraphs

**Setting name:** `GCC_ENABLE_TRIGRAPHS`

Controls whether or not trigraphs are permitted in the source code.

<a id="Relax-IEEE-Compliance"></a>

### Relax IEEE Compliance

**Setting name:** `GCC_FAST_MATH`

Enables some floating point optimizations that are not IEEE754-compliant, but which usually work. Programs that require strict IEEE compliance may not work with this option.

<a id="Generate-Debug-Symbols"></a>

### Generate Debug Symbols

**Setting name:** `GCC_GENERATE_DEBUGGING_SYMBOLS`

Enables or disables generation of debug symbols. When debug symbols are enabled, the level of detail can be controlled by the `DEBUG_INFORMATION_FORMAT` setting.

<a id="Generate-Legacy-Test-Coverage-Files"></a>

### Generate Legacy Test Coverage Files

**Setting name:** `GCC_GENERATE_TEST_COVERAGE_FILES`

Activating this setting causes a `notes` file to be produced that the `gcov` code-coverage utility can use to show program coverage.

<a id="Increase-Sharing-of-Precompiled-Headers"></a>

### Increase Sharing of Precompiled Headers

**Setting name:** `GCC_INCREASE_PRECOMPILED_HEADER_SHARING`

Enabling this option will enable increased sharing of precompiled headers among targets that share the same prefix header and precompiled header directory.

Xcode distinguishes between precompiled header (PCH) files by generating a hash value based on the command-line options to the compiler used to create the PCH. Enabling this option will exclude certain compiler options from that hash. Presently this option will exclude search path options (`-I`, `-iquote`, `-isystem`, `-F`, `-L`) from the hash.

Enabling increased sharing of PCH files carries some risk—if two targets use the same prefix header but have different include paths that cause the prefix header to include different files when they are precompiled, then subtle problems may result because one target will use a PCH that was built using files included by the other target. In this case, this option must be turned off in order to enforce correctness.

<a id="Inline-Methods-Hidden"></a>

### Inline Methods Hidden

**Setting name:** `GCC_INLINES_ARE_PRIVATE_EXTERN`

When enabled, out-of-line copies of inline methods are declared `private extern`.

<a id="Compile-Sources-As"></a>

### Compile Sources As

**Setting name:** `GCC_INPUT_FILETYPE`

Specifies whether to compile each source file according to its file type, or whether to treat all source files in the target as if they are of a specific language.

<a id="Instrument-Program-Flow"></a>

### Instrument Program Flow

**Setting name:** `GCC_INSTRUMENT_PROGRAM_FLOW_ARCS`

Activating this setting indicates that code should be added so program flow arcs are instrumented.

<a id="Enable-Linking-With-Shared-Libraries"></a>

### Enable Linking With Shared Libraries

**Setting name:** `GCC_LINK_WITH_DYNAMIC_LIBRARIES`

Enabling this option allows linking with the shared libraries. This is the default for most product types.

<a id="No-Common-Blocks"></a>

### No Common Blocks

**Setting name:** `GCC_NO_COMMON_BLOCKS`

In C, allocate even uninitialized global variables in the data section of the object file, rather than generating them as common blocks. This has the effect that if the same variable is declared (without `extern`) in two different compilations, you will get an error when you link them.

<a id="Optimization-Level"></a>

### Optimization Level

**Setting name:** `GCC_OPTIMIZATION_LEVEL`

Specifies the degree to which the generated code is optimized for speed and binary size.

- *None:* Do not optimize. \[-O0\] With this setting, the compiler’s goal is to reduce the cost of compilation and to make debugging produce the expected results. Statements are independent—if you stop the program with a breakpoint between statements, you can then assign a new value to any variable or change the program counter to any other statement in the function and get exactly the results you would expect from the source code.
- *Fast:* Optimizing compilation takes somewhat more time, and a lot more memory for a large function. \[-O1\] With this setting, the compiler tries to reduce code size and execution time, without performing any optimizations that take a great deal of compilation time. In Apple’s compiler, strict aliasing, block reordering, and inter-block scheduling are disabled by default when optimizing.
- *Faster:* The compiler performs nearly all supported optimizations that do not involve a space-speed tradeoff. \[-O2\] With this setting, the compiler does not perform loop unrolling or function inlining, or register renaming. As compared to the `Fast` setting, this setting increases both compilation time and the performance of the generated code.
- *Fastest:* Turns on all optimizations specified by the `Faster` setting and also turns on function inlining and register renaming options. This setting may result in a larger binary. \[-O3\]
- *Fastest, Smallest:* Optimize for size. This setting enables all `Faster` optimizations that do not typically increase code size. It also performs further optimizations designed to reduce code size. \[-Os\]
- *Fastest, Aggressive Optimizations:* This setting enables `Fastest` but also enables aggressive optimizations that may break strict standards compliance but should work well on well-behaved code. \[-Ofast\]
- *Smallest, Aggressive Size Optimizations:* This setting enables additional size savings by isolating repetitive code patterns into a compiler generated function. \[-Oz\]

<a id="Precompile-Prefix-Header"></a>

### Precompile Prefix Header

**Setting name:** `GCC_PRECOMPILE_PREFIX_HEADER`

Generates a precompiled header for the prefix header, which should reduce overall build times.

Precompiling the prefix header will be most effective if the contents of the prefix header or any file it includes change rarely. If the contents of the prefix header or any file it includes change frequently, there may be a negative impact to overall build time.

<a id="Prefix-Header"></a>

### Prefix Header

**Setting name:** `GCC_PREFIX_HEADER`

Implicitly include the named header. The path given should either be a project relative path or an absolute path.

<a id="Preprocessor-Macros"></a>

### Preprocessor Macros

**Setting name:** `GCC_PREPROCESSOR_DEFINITIONS`

Space-separated list of preprocessor macros of the form `foo` or `foo=bar`.

<a id="Preprocessor-Macros-Not-Used-In-Precompiled-Headers"></a>

### Preprocessor Macros Not Used In Precompiled Headers

**Setting name:** `GCC_PREPROCESSOR_DEFINITIONS_NOT_USED_IN_PRECOMPS`

Space-separated list of preprocessor macros of the form `foo` or `foo=bar`. These macros are not used when precompiling a prefix header file.

<a id="Make-Strings-Read-Only"></a>

### Make Strings Read-Only

**Setting name:** `GCC_REUSE_STRINGS`

Reuse string literals.

<a id="Short-Enumeration-Constants"></a>

### Short Enumeration Constants

**Setting name:** `GCC_SHORT_ENUMS`

Make enums only as large as needed for the range of possible values.

This setting generates code that may not be binary compatible with code generated without this setting or with macOS frameworks.

<a id="Enforce-Strict-Aliasing"></a>

### Enforce Strict Aliasing

**Setting name:** `GCC_STRICT_ALIASING`

Optimize code by making more aggressive assumptions about whether pointers can point to the same objects as other pointers. Programs that use pointers a lot may benefit from this, but programs that don’t strictly follow the ISO C rules about the type with which an object may be accessed may behave unexpectedly.

<a id="Symbols-Hidden-by-Default"></a>

### Symbols Hidden by Default

**Setting name:** `GCC_SYMBOLS_PRIVATE_EXTERN`

When enabled, all symbols are declared `private extern` unless explicitly marked to be exported using `__attribute__((visibility("default")))` in code. If not enabled, all symbols are exported unless explicitly marked as `private extern`. See [Controlling Symbol Visibility](https://developer.apple.com/library/content/documentation/DeveloperTools/Conceptual/CppRuntimeEnv/Articles/SymbolVisibility.html#//apple_ref/doc/uid/TP40001670-CJBGBHEJ) in [C++ Runtime Environment Programming Guide](https://developer.apple.com/library/content/documentation/DeveloperTools/Conceptual/CppRuntimeEnv/CPPRuntimeEnv.html).

<a id="Statics-are-Thread-Safe"></a>

### Statics are Thread-Safe

**Setting name:** `GCC_THREADSAFE_STATICS`

Emits extra code to use the routines specified in the C++ ABI for thread-safe initialization of local statics. You can disable this option to reduce code size slightly in code that doesn’t need to be thread-safe.

<a id="Treat-Missing-Function-Prototypes-as-Errors"></a>

### Treat Missing Function Prototypes as Errors

**Setting name:** `GCC_TREAT_IMPLICIT_FUNCTION_DECLARATIONS_AS_ERRORS`

Causes warnings about missing function prototypes to be treated as errors. Only applies to C and Objective-C.

<a id="Treat-Incompatible-Pointer-Type-Warnings-as-Errors"></a>

### Treat Incompatible Pointer Type Warnings as Errors

**Setting name:** `GCC_TREAT_INCOMPATIBLE_POINTER_TYPE_WARNINGS_AS_ERRORS`

Enabling this option causes warnings about incompatible pointer types to be treated as errors.

<a id="Treat-Warnings-as-Errors"></a>

### Treat Warnings as Errors

**Setting name:** `GCC_TREAT_WARNINGS_AS_ERRORS`

Enabling this option causes all warnings to be treated as errors.

<a id="Unroll-Loops"></a>

### Unroll Loops

**Setting name:** `GCC_UNROLL_LOOPS`

Unrolls loops. Unrolling makes the code larger, but may make it faster by reducing the number of branches executed.

<a id="Use-Standard-System-Header-Directory-Searching"></a>

### Use Standard System Header Directory Searching

**Setting name:** `GCC_USE_STANDARD_INCLUDE_SEARCHING`

Controls whether the standard system directories are searched for header files. When disabled, only the directories you have specified with `-I` options (and the directory of the current file, if appropriate) are searched.

<a id="Compiler-for-CC++Objective-C"></a>

### Compiler for C/C++/Objective-C

**Setting name:** `GCC_VERSION`

The compiler to use for C, C++, and Objective-C.

<a id="Implicit-Conversion-to-32-Bit-Type"></a>

### Implicit Conversion to 32 Bit Type

**Setting name:** `GCC_WARN_64_TO_32_BIT_CONVERSION`

Warn if a value is implicitly converted from a 64-bit type to a 32-bit type. This is a subset of the warnings provided by -Wconversion.

<a id="Deprecated-Functions"></a>

### Deprecated Functions

**Setting name:** `GCC_WARN_ABOUT_DEPRECATED_FUNCTIONS`

Warn about the use of deprecated functions, variables, and types (as indicated by the `deprecated` attribute).

<a id="Undefined-Use-of-offsetof-Macro"></a>

### Undefined Use of offsetof Macro

**Setting name:** `GCC_WARN_ABOUT_INVALID_OFFSETOF_MACRO`

Unchecking this setting will suppress warnings from applying the `offsetof` macro to a non-POD type. According to the 1998 ISO C++ standard, applying `offsetof` to a non-POD type is undefined. In existing C++ implementations, however, `offsetof` typically gives meaningful results even when applied to certain kinds of non-POD types, such as a simple struct that fails to be a POD type only by virtue of having a constructor. This flag is for users who are aware that they are writing non-portable code and who have deliberately chosen to ignore the warning about it.

The restrictions on `offsetof` may be relaxed in a future version of the C++ standard.

<a id="Missing-Fields-in-Structure-Initializers"></a>

### Missing Fields in Structure Initializers

**Setting name:** `GCC_WARN_ABOUT_MISSING_FIELD_INITIALIZERS`

Warn if a structure’s initializer has some fields missing. For example, the following code would cause such a warning because `x.h` is implicitly zero:

```
struct s { int f, g, h; };
struct s x = { 3, 4 };
```

This option does not warn about designated initializers, so the following modification would not trigger a warning:

```
struct s { int f, g, h; };
struct s x = { .f = 3, .g = 4 };
```

<a id="Missing-Newline-At-End-Of-File"></a>

### Missing Newline At End Of File

**Setting name:** `GCC_WARN_ABOUT_MISSING_NEWLINE`

Warn when a source file does not end with a newline.

<a id="Missing-Function-Prototypes"></a>

### Missing Function Prototypes

**Setting name:** `GCC_WARN_ABOUT_MISSING_PROTOTYPES`

Causes warnings to be emitted about missing prototypes.

<a id="Pointer-Sign-Comparison"></a>

### Pointer Sign Comparison

**Setting name:** `GCC_WARN_ABOUT_POINTER_SIGNEDNESS`

Warn when pointers passed via arguments or assigned to a variable differ in sign.

<a id="Mismatched-Return-Type"></a>

### Mismatched Return Type

**Setting name:** `GCC_WARN_ABOUT_RETURN_TYPE`

Causes warnings to be emitted when a function with a defined return type (not `void`) contains a return statement without a return-value or when it does not contain any return statements. Also emits a warning when a function with a void return type tries to return a value.

<a id="Incomplete-Objective-C-Protocols"></a>

### Incomplete Objective-C Protocols

**Setting name:** `GCC_WARN_ALLOW_INCOMPLETE_PROTOCOL`

Warn if methods required by a protocol are not implemented in the class adopting it. Only applies to Objective-C.

<a id="Check-Switch-Statements"></a>

### Check Switch Statements

**Setting name:** `GCC_WARN_CHECK_SWITCH_STATEMENTS`

Warn whenever a switch statement has an index of enumeral type and lacks a case for one or more of the named codes of that enumeration. The presence of a default label prevents this warning. Case labels outside the enumeration range also provoke warnings when this option is used.

<a id="Four-Character-Literals"></a>

### Four Character Literals

**Setting name:** `GCC_WARN_FOUR_CHARACTER_CONSTANTS`

Warn about four-char literals (for example, macOS-style `OSTypes`: `'APPL'`).

<a id="Overloaded-Virtual-Functions"></a>

### Overloaded Virtual Functions

**Setting name:** `GCC_WARN_HIDDEN_VIRTUAL_FUNCTIONS`

Warn when a function declaration hides virtual functions from a base class.

For example, in the following example, the `A` class version of `f()` is hidden in `B`.

```
struct A {
  virtual void f();
};

struct B: public A {
  void f(int);
};
```

As a result, the following code will fail to compile.

```
B* b;
b->f();
```

This setting only applies to C++ and Objective-C++ sources.

<a id="Inhibit-All-Warnings"></a>

### Inhibit All Warnings

**Setting name:** `GCC_WARN_INHIBIT_ALL_WARNINGS`

Inhibit all warning messages.

<a id="Initializer-Not-Fully-Bracketed"></a>

### Initializer Not Fully Bracketed

**Setting name:** `GCC_WARN_INITIALIZER_NOT_FULLY_BRACKETED`

Warn if an aggregate or union initializer is not fully bracketed. In the following example, the initializer for `a` is not fully bracketed, but the initializer for `b` is fully bracketed.

```
int a[2][2] = { 0, 1, 2, 3 };
int b[2][2] = { { 0, 1 }, { 2, 3 } };
```

<a id="Missing-Braces-and-Parentheses"></a>

### Missing Braces and Parentheses

**Setting name:** `GCC_WARN_MISSING_PARENTHESES`

Warn if parentheses are omitted in certain contexts, such as when there is an assignment in a context where a truth value is expected, or when operators are nested whose precedence causes confusion. Also, warn about constructions where there may be confusion as to which `if` statement an `else` branch belongs. For example:

```
{
  if (a)
    if (b)
      foo ();
  else
    bar ();
}
```

In C, every `else` branch belongs to the innermost possible `if` statement, which in the example above is `if (b)`. This is often not what the programmer expects, as illustrated by indentation used in the example above. This build setting causes GCC to issue a warning when there is the potential for this confusion. To eliminate the warning, add explicit braces around the innermost `if` statement so there is no way the `else` could belong to the enclosing `if`. For example:

```
{
  if (a)
    {
      if (b)
        foo ();
      else
        bar ();
    }
}
```

<a id="Nonvirtual-Destructor"></a>

### Nonvirtual Destructor

**Setting name:** `GCC_WARN_NON_VIRTUAL_DESTRUCTOR`

Warn when a class declares an nonvirtual destructor that should probably be virtual, because it looks like the class will be used polymorphically. This is only active for C++ or Objective-C++ sources.

<a id="Pedantic-Warnings"></a>

### Pedantic Warnings

**Setting name:** `GCC_WARN_PEDANTIC`

Issue all the warnings demanded by strict ISO C and ISO C++; reject all programs that use forbidden extensions, and some other programs that do not follow ISO C and ISO C++. For ISO C, follows the version of the ISO C standard specified by any `-std` option used.

<a id="Hidden-Local-Variables"></a>

### Hidden Local Variables

**Setting name:** `GCC_WARN_SHADOW`

Warn whenever a local variable shadows another local variable, parameter or global variable or whenever a builtin function is shadowed.

<a id="Sign-Comparison"></a>

### Sign Comparison

**Setting name:** `GCC_WARN_SIGN_COMPARE`

Warn when a comparison between signed and unsigned values could produce an incorrect result when the signed value is converted to unsigned.

<a id="Strict-Selector-Matching"></a>

### Strict Selector Matching

**Setting name:** `GCC_WARN_STRICT_SELECTOR_MATCH`

Warn if multiple methods with differing argument and/or return types are found for a given selector when attempting to send a message using this selector to a receiver of type `id` or `Class`. When this setting is disabled, the compiler will omit such warnings if any differences found are confined to types that share the same size and alignment.

<a id="Typecheck-Calls-to-printfscanf"></a>

### Typecheck Calls to printf/scanf

**Setting name:** `GCC_WARN_TYPECHECK_CALLS_TO_PRINTF`

Check calls to `printf` and `scanf` to make sure that the arguments supplied have types appropriate to the format string specified, and that the conversions specified in the format string make sense.

<a id="Undeclared-Selector"></a>

### Undeclared Selector

**Setting name:** `GCC_WARN_UNDECLARED_SELECTOR`

Warn if a `@selector(...)` expression referring to an undeclared selector is found. A selector is considered undeclared if no method with that name has been declared before the `@selector(...)` expression, either explicitly in an `@interface` or `@protocol` declaration, or implicitly in an `@implementation` section. This option always performs its checks as soon as a `@selector(...)` expression is found, while `-Wselector` only performs its checks in the final stage of compilation. This also enforces the coding style convention that methods and selectors must be declared before being used.

<a id="Uninitialized-Variables"></a>

### Uninitialized Variables

**Setting name:** `GCC_WARN_UNINITIALIZED_AUTOS`

Warn if a variable might be clobbered by a `setjmp` call or if an automatic variable is used without prior initialization.

The compiler may not detect all cases where an automatic variable is initialized or all usage patterns that may lead to use prior to initialization. You can toggle between the normal uninitialized value checking or the more aggressive (conservative) checking, which finds more issues but the checking is much stricter.

<a id="Unknown-Pragma"></a>

### Unknown Pragma

**Setting name:** `GCC_WARN_UNKNOWN_PRAGMAS`

Warn when a `#pragma` directive is encountered that is not understood by GCC. If this command line option is used, warnings will even be issued for unknown pragmas in system header files. This is not the case if the warnings were only enabled by the `-Wall` command-line option.

<a id="Unused-Functions"></a>

### Unused Functions

**Setting name:** `GCC_WARN_UNUSED_FUNCTION`

Warn whenever a static function is declared but not defined or a non-inline static function is unused.

<a id="Unused-Labels"></a>

### Unused Labels

**Setting name:** `GCC_WARN_UNUSED_LABEL`

Warn whenever a label is declared but not used.

<a id="Unused-Parameters"></a>

### Unused Parameters

**Setting name:** `GCC_WARN_UNUSED_PARAMETER`

Warn whenever a function parameter is unused aside from its declaration.

<a id="Unused-Values"></a>

### Unused Values

**Setting name:** `GCC_WARN_UNUSED_VALUE`

Warn whenever a statement computes a result that is explicitly not used.

<a id="Unused-Variables"></a>

### Unused Variables

**Setting name:** `GCC_WARN_UNUSED_VARIABLE`

Warn whenever a local variable or nonconstant static variable is unused aside from its declaration.

<a id="Generate-Infoplist-File"></a>

### Generate Info.plist File

**Setting name:** `GENERATE_INFOPLIST_FILE`

Automatically generate an Info.plist file.

<a id="Enable-Intermediate-Text-Based-Stubs-Generation"></a>

### Enable Intermediate Text-Based Stubs Generation

**Setting name:** `GENERATE_INTERMEDIATE_TEXT_BASED_STUBS`

Enables the generation of intermediate Text-Based stubs for dynamic libraries and frameworks to more precisely track linker dependencies in incremental builds.

<a id="Force-Package-Info-Generation"></a>

### Force Package Info Generation

**Setting name:** `GENERATE_PKGINFO_FILE`

Forces the `PkgInfo` file to be written to wrapped products even if this file is not expected.

<a id="Perform-Single-Object-Prelink"></a>

### Perform Single-Object Prelink

**Setting name:** `GENERATE_PRELINK_OBJECT_FILE`

Activating this setting will cause the object files built by a target to be prelinked using `ld -r` into a single object file, and that object file will then be linked into the final product. This is useful to force the linker to resolve symbols and link the object files into a single module before building a static library. Also, a separate set of link flags can be applied to the prelink allowing additional control over, for instance, exported symbols.

<a id="Generate-Profiling-Code"></a>

### Generate Profiling Code

**Setting name:** `GENERATE_PROFILING_CODE`

Activating this setting will cause the compiler and linker to generate profiling code. For example, GCC will generate code suitable for use with `gprof(1)`.

<a id="Enable-Text-Based-Stubs-Generation"></a>

### Enable Text-Based Stubs Generation

**Setting name:** `GENERATE_TEXT_BASED_STUBS`

Enables the generation of Text-Based stubs for dynamic libraries and frameworks.

<a id="HEADERMAPINCLUDESFLATENTRIESFORTARGETBEINGBUILT"></a>

### HEADERMAP_INCLUDES_FLAT_ENTRIES_FOR_TARGET_BEING_BUILT

**Setting name:** `HEADERMAP_INCLUDES_FLAT_ENTRIES_FOR_TARGET_BEING_BUILT`

Specifies whether the header map contains a name/path entry for every header in the target being built.

<a id="HEADERMAPINCLUDESFRAMEWORKENTRIESFORALLPRODUCTTYPES"></a>

### HEADERMAP_INCLUDES_FRAMEWORK_ENTRIES_FOR_ALL_PRODUCT_TYPES

**Setting name:** `HEADERMAP_INCLUDES_FRAMEWORK_ENTRIES_FOR_ALL_PRODUCT_TYPES`

Specifies whether the header map contains a framework-name/path entry for every header in the target being built, including targets that do not build frameworks.

<a id="HEADERMAPINCLUDESPROJECTHEADERS"></a>

### HEADERMAP_INCLUDES_PROJECT_HEADERS

**Setting name:** `HEADERMAP_INCLUDES_PROJECT_HEADERS`

Specifies whether the header map contains a name/path entry for every header in the project, regardless of the headers’ target membership.

<a id="Header-Search-Paths"></a>

### Header Search Paths

**Setting name:** `HEADER_SEARCH_PATHS`

This is a list of paths to folders to be searched by the compiler for included or imported header files when compiling C, Objective-C, C++, or Objective-C++. Paths are delimited by whitespace, so any paths with spaces in them need to be properly quoted.

<a id="Compiler-Mode-for-CocoaTouch-Documents"></a>

### Compiler Mode for CocoaTouch Documents

**Setting name:** `IBC_COCOATOUCH_COMPILER_MODE`

Instructs the compiler on which compilation mode to use.

<a id="Auto-Activate-Custom-Fonts"></a>

### Auto-Activate Custom Fonts

**Setting name:** `IBC_COMPILER_AUTO_ACTIVATE_CUSTOM_FONTS`

Instructs the XIB compiler to add custom fonts to the application’s `Info.plist`, which will cause the fonts to activate upon application launch.

<a id="Show-Errors"></a>

### Show Errors

**Setting name:** `IBC_ERRORS`

Show errors encountered during the compilation of XIB files.

<a id="Flatten-Compiled-XIB-Files"></a>

### Flatten Compiled XIB Files

**Setting name:** `IBC_FLATTEN_NIBS`

If enabled, compile XIB files into flattened (non-wrapper) NIB files. After flattening, the resulting NIB is more compact but no longer editable by Interface Builder. When this option is disabled, the resulting NIB file remains editable in Interface Builder.

<a id="Default-Module"></a>

### Default Module

**Setting name:** `IBC_MODULE`

Defines the module name for Swift classes referenced without a specific module name.

<a id="Show-Notices"></a>

### Show Notices

**Setting name:** `IBC_NOTICES`

Show notices encountered during the compilation of XIB files.

<a id="Other-Interface-Builder-Compiler-Flags"></a>

### Other Interface Builder Compiler Flags

**Setting name:** `IBC_OTHER_FLAGS`

A list of additional flags to pass to the Interface Builder Compiler. Use this setting if Xcode does not already provide UI for a particular Interface Builder Compiler flag.

<a id="Overriding-Plug-In-and-Framework-Directory"></a>

### Overriding Plug-In and Framework Directory

**Setting name:** `IBC_OVERRIDING_PLUGINS_AND_FRAMEWORKS_DIR`

Instructs Interface Builder to load frameworks and Interface Builder plugins from the specified directory. Setting this value to `$(BUILD_DIR)/$(CONFIGURATION)$(EFFECTIVE_PLATFORM_NAME)` will ensure that Interface Builder will load frameworks and plug-ins from the built products directory of the current build configuration.

<a id="Plug-Ins"></a>

### Plug-Ins

**Setting name:** `IBC_PLUGINS`

A list of paths to Interface Builder plugins to load when compiling XIB files.

<a id="Plug-In-Search-Paths"></a>

### Plug-In Search Paths

**Setting name:** `IBC_PLUGIN_SEARCH_PATHS`

A list of paths to be searched for Interface Builder plug-ins to load when compiling XIB files.

<a id="Strip-NIB-Files"></a>

### Strip NIB Files

**Setting name:** `IBC_STRIP_NIBS`

Strips an Interface Builder NIB to reduce its size for deployment.  The resulting NIB is more compact but no longer editable by Interface Builder.  When this option is disabled, the resulting NIB file remains editable by Interface Builder.

<a id="Show-Warnings"></a>

### Show Warnings

**Setting name:** `IBC_WARNINGS`

Show warnings encountered during the compilation of XIB files.

<a id="Compiler-Mode-for-CocoaTouch-Documents"></a>

### Compiler Mode for CocoaTouch Documents

**Setting name:** `IBSC_COCOATOUCH_COMPILER_MODE`

Instructs the compiler on which compilation mode to use.

<a id="Auto-Activate-Custom-Fonts"></a>

### Auto-Activate Custom Fonts

**Setting name:** `IBSC_COMPILER_AUTO_ACTIVATE_CUSTOM_FONTS`

Instructs the Storyboard compiler to add custom fonts to the application’s `Info.plist` that will cause the fonts to activate upon application launch.

<a id="Show-Errors"></a>

### Show Errors

**Setting name:** `IBSC_ERRORS`

Show errors encountered during the compilation of Storyboard files.

<a id="Flatten-Compiled-Storyboard-Files"></a>

### Flatten Compiled Storyboard Files

**Setting name:** `IBSC_FLATTEN_NIBS`

Compiles a Storyboard file into flattened (non-wrapper) Storyboard file. After flattening, the resulting Storyboard is more compact but no longer editable by Interface Builder. When this option is disabled, the resulting Storyboard file remains editable in Interface Builder.

<a id="Default-Module"></a>

### Default Module

**Setting name:** `IBSC_MODULE`

Defines the module name for Swift classes referenced without a specific module name.

<a id="Show-Notices"></a>

### Show Notices

**Setting name:** `IBSC_NOTICES`

Show notices encountered during the compilation of Storyboard files.

<a id="Other-Storyboard-Compiler-Flags"></a>

### Other Storyboard Compiler Flags

**Setting name:** `IBSC_OTHER_FLAGS`

A list of additional flags to pass to the Interface Builder Compiler. Use this setting if Xcode does not already provide UI for a particular Interface Builder Compiler flag.

<a id="Strip-Storyboardc-Files"></a>

### Strip Storyboardc Files

**Setting name:** `IBSC_STRIP_NIBS`

Strips an editable Interface Builder storyboardc file to reduce its size for deployment.  The resulting storyboardc is more compact but no longer editable by Interface Builder.  When this option is disabled, the resulting storyboardc file remains editable by Interface Builder.

<a id="Show-Warnings"></a>

### Show Warnings

**Setting name:** `IBSC_WARNINGS`

Show warnings encountered during the compilation of Storyboard files.

<a id="Implicit-Dependency-Domain"></a>

### Implicit Dependency Domain

**Setting name:** `IMPLICIT_DEPENDENCY_DOMAIN`

The domain in which the target will match or be matched for implicit dependencies. An implicit dependency will only be established between two targets if they are both in the same domain.

<a id="Included-Explicit-Target-Dependencies"></a>

### Included Explicit Target Dependencies

**Setting name:** `INCLUDED_EXPLICIT_TARGET_DEPENDENCIES`

A list of patterns (as defined by `fnmatch(3)`) specifying the names of explicit target dependencies to *include* when determining which targets to build. This setting is only useful when combined with `EXCLUDED_EXPLICIT_TARGET_DEPENDENCIES`, and can be used to define complex filters for which targets should be built in response to other build settings.

<a id="Sub-Directories-to-Include-in-Recursive-Searches"></a>

### Sub-Directories to Include in Recursive Searches

**Setting name:** `INCLUDED_RECURSIVE_SEARCH_PATH_SUBDIRECTORIES`

This is a list of `fnmatch()`-style patterns of file or directory names to include when performing a recursive search. By default, this is empty and is only customized when you want to provide exceptions to the list of filename patterns provided in `EXCLUDED_RECURSIVE_SEARCH_PATH_SUBDIRECTORIES`.

<a id="Included-Source-File-Names"></a>

### Included Source File Names

**Setting name:** `INCLUDED_SOURCE_FILE_NAMES`

A list of patterns (as defined by `fnmatch(3)`) specifying the names of source files to explicitly *include* when processing the files in the target’s build phases. This setting is only useful when combined with `EXCLUDED_SOURCE_FILE_NAMES`, and can be used to define complex filters for which files from the phase should be built in response to other build settings.

<a id="Compress-Index-Store"></a>

### Compress Index Store

**Setting name:** `INDEX_STORE_COMPRESS`

Compress the index store, reducing its size on disk.

<a id="Index-only-project-files"></a>

### Index only project files

**Setting name:** `INDEX_STORE_ONLY_PROJECT_FILES`

Only index the source files that are being compiled within this project. Do not emit data into the index store for system modules.

<a id="Expand-Build-Settings-in-Infoplist-File"></a>

### Expand Build Settings in Info.plist File

**Setting name:** `INFOPLIST_EXPAND_BUILD_SETTINGS`

Expand build settings in the `Info.plist` file.

<a id="Infoplist-File"></a>

### Info.plist File

**Setting name:** `INFOPLIST_FILE`

The project-relative path to the property list file that contains the `Info.plist` information used by bundles.

The build system merges the values you specify in this file with other values it generates during the build process. The product type, target platform, App Privacy manifests, input from other build tools, and other built-in logic impact the contents of the final `Info.plist` file it produces. When `GENERATE_INFOPLIST_FILE` is enabled, the build system also includes content from build settings in the merge process.

For details on information property list files, see [Information Property List](https://developer.apple.com/documentation/bundleresources/information-property-list).

<a id="Bundle-Display-Name"></a>

### Bundle Display Name

**Setting name:** `INFOPLIST_KEY_CFBundleDisplayName`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [CFBundleDisplayName](https://developer.apple.com/documentation/bundleresources/information-property-list/cfbundledisplayname) key in the `Info.plist` file to the value of this build setting.

<a id="Complication-Principal-Class"></a>

### Complication Principal Class

**Setting name:** `INFOPLIST_KEY_CLKComplicationPrincipalClass`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [CLKComplicationPrincipalClass](https://developer.apple.com/documentation/bundleresources/information-property-list/clkcomplicationprincipalclass) key in the `Info.plist` file to the value of this build setting.

<a id="Supports-Game-Controller-User-Interaction"></a>

### Supports Game Controller User Interaction

**Setting name:** `INFOPLIST_KEY_GCSupportsControllerUserInteraction`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the GCSupportsControllerUserInteraction key in the `Info.plist` file to the value of this build setting.

<a id="Supports-Game-Mode"></a>

### Supports Game Mode

**Setting name:** `INFOPLIST_KEY_GCSupportsGameMode`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the GCSupportsGameMode key in the `Info.plist` file to the value of this build setting.

<a id="App-Uses-Non-Exempt-Encryption"></a>

### App Uses Non-Exempt Encryption

**Setting name:** `INFOPLIST_KEY_ITSAppUsesNonExemptEncryption`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [ITSAppUsesNonExemptEncryption](https://developer.apple.com/documentation/bundleresources/information-property-list/itsappusesnonexemptencryption) key in the `Info.plist` file to the value of this build setting.

<a id="App-Encryption-Export-Compliance-Code"></a>

### App Encryption Export Compliance Code

**Setting name:** `INFOPLIST_KEY_ITSEncryptionExportComplianceCode`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [ITSEncryptionExportComplianceCode](https://developer.apple.com/documentation/bundleresources/information-property-list/itsencryptionexportcompliancecode) key in the `Info.plist` file to the value of this build setting.

<a id="Application-Category"></a>

### Application Category

**Setting name:** `INFOPLIST_KEY_LSApplicationCategoryType`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [LSApplicationCategoryType](https://developer.apple.com/documentation/bundleresources/information-property-list/lsapplicationcategorytype) key in the `Info.plist` file to the value of this build setting.

<a id="Application-is-Background-Only"></a>

### Application is Background Only

**Setting name:** `INFOPLIST_KEY_LSBackgroundOnly`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [LSBackgroundOnly](https://developer.apple.com/documentation/bundleresources/information-property-list/lsbackgroundonly) key in the `Info.plist` file to the value of this build setting.

<a id="Supports-Opening-Documents-in-Place"></a>

### Supports Opening Documents in Place

**Setting name:** `INFOPLIST_KEY_LSSupportsOpeningDocumentsInPlace`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [LSSupportsOpeningDocumentsInPlace](https://developer.apple.com/documentation/bundleresources/information-property-list/lssupportsopeningdocumentsinplace) key in the `Info.plist` file to the value of this build setting.

<a id="Application-is-Agent-UIElement"></a>

### Application is Agent (UIElement)

**Setting name:** `INFOPLIST_KEY_LSUIElement`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [LSUIElement](https://developer.apple.com/documentation/bundleresources/information-property-list/lsuielement) key in the `Info.plist` file to the value of this build setting.

<a id="Metal-Capture-Enabled"></a>

### Metal Capture Enabled

**Setting name:** `INFOPLIST_KEY_MetalCaptureEnabled`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the MetalCaptureEnabled key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-NFC-Scan-Usage-Description"></a>

### Privacy - NFC Scan Usage Description

**Setting name:** `INFOPLIST_KEY_NFCReaderUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NFCReaderUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nfcreaderusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Accessory-Tracking-Usage-Description"></a>

### Privacy - Accessory Tracking Usage Description

**Setting name:** `INFOPLIST_KEY_NSAccessoryTrackingUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSAccessoryTrackingUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsaccessorytrackingusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Other-Application-Data-Usage-Description"></a>

### Privacy - Other Application Data Usage Description

**Setting name:** `INFOPLIST_KEY_NSAppDataUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSAppDataUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsappdatausagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-AppleEvents-Sending-Usage-Description"></a>

### Privacy - AppleEvents Sending Usage Description

**Setting name:** `INFOPLIST_KEY_NSAppleEventsUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSAppleEventsUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsappleeventsusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Media-Library-Usage-Description"></a>

### Privacy - Media Library Usage Description

**Setting name:** `INFOPLIST_KEY_NSAppleMusicUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSAppleMusicUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsapplemusicusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Bluetooth-Always-Usage-Description"></a>

### Privacy - Bluetooth Always Usage Description

**Setting name:** `INFOPLIST_KEY_NSBluetoothAlwaysUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSBluetoothAlwaysUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsbluetoothalwaysusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Bluetooth-Peripheral-Usage-Description"></a>

### Privacy - Bluetooth Peripheral Usage Description

**Setting name:** `INFOPLIST_KEY_NSBluetoothPeripheralUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSBluetoothPeripheralUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsbluetoothperipheralusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Bluetooth-While-In-Use-Usage-Description"></a>

### Privacy - Bluetooth While In Use Usage Description

**Setting name:** `INFOPLIST_KEY_NSBluetoothWhileInUseUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the NSBluetoothWhileInUseUsageDescription key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Calendars-Full-Access-Usage-Description"></a>

### Privacy - Calendars Full Access Usage Description

**Setting name:** `INFOPLIST_KEY_NSCalendarsFullAccessUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSCalendarsFullAccessUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nscalendarsfullaccessusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Calendars-Usage-Description"></a>

### Privacy - Calendars Usage Description

**Setting name:** `INFOPLIST_KEY_NSCalendarsUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSCalendarsUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nscalendarsusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Calendars-Write-Only-Usage-Description"></a>

### Privacy - Calendars Write Only Usage Description

**Setting name:** `INFOPLIST_KEY_NSCalendarsWriteOnlyAccessUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSCalendarsWriteOnlyAccessUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nscalendarswriteonlyaccessusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Camera-Usage-Description"></a>

### Privacy - Camera Usage Description

**Setting name:** `INFOPLIST_KEY_NSCameraUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSCameraUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nscamerausagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Contacts-Usage-Description"></a>

### Privacy - Contacts Usage Description

**Setting name:** `INFOPLIST_KEY_NSContactsUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSContactsUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nscontactsusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Critical-Messaging-Usage-Description"></a>

### Privacy - Critical Messaging Usage Description

**Setting name:** `INFOPLIST_KEY_NSCriticalMessagingUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSCriticalMessagingUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nscriticalmessagingusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Desktop-Folder-Usage-Description"></a>

### Privacy - Desktop Folder Usage Description

**Setting name:** `INFOPLIST_KEY_NSDesktopFolderUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSDesktopFolderUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsdesktopfolderusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Documents-Folder-Usage-Description"></a>

### Privacy - Documents Folder Usage Description

**Setting name:** `INFOPLIST_KEY_NSDocumentsFolderUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSDocumentsFolderUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsdocumentsfolderusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Downloads-Folder-Usage-Description"></a>

### Privacy - Downloads Folder Usage Description

**Setting name:** `INFOPLIST_KEY_NSDownloadsFolderUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSDownloadsFolderUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsdownloadsfolderusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Face-ID-Usage-Description"></a>

### Privacy - Face ID Usage Description

**Setting name:** `INFOPLIST_KEY_NSFaceIDUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSFaceIDUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsfaceidusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Fall-Detection-Usage-Description"></a>

### Privacy - Fall Detection Usage Description

**Setting name:** `INFOPLIST_KEY_NSFallDetectionUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSFallDetectionUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsfalldetectionusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Access-to-a-File-Provide-Domain-Usage-Description"></a>

### Privacy - Access to a File Provide Domain Usage Description

**Setting name:** `INFOPLIST_KEY_NSFileProviderDomainUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSFileProviderDomainUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsfileproviderdomainusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-File-Provider-Presence-Usage-Description"></a>

### Privacy - File Provider Presence Usage Description

**Setting name:** `INFOPLIST_KEY_NSFileProviderPresenceUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the NSFileProviderPresenceUsageDescription key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Financial-Data-Usage-Description"></a>

### Privacy - Financial Data Usage Description

**Setting name:** `INFOPLIST_KEY_NSFinancialDataUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSFinancialDataUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsfinancialdatausagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Focus-Status-Usage-Description"></a>

### Privacy - Focus Status Usage Description

**Setting name:** `INFOPLIST_KEY_NSFocusStatusUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the NSFocusStatusUsageDescription key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-GameKit-Friend-List-Usage-Description"></a>

### Privacy - GameKit Friend List Usage Description

**Setting name:** `INFOPLIST_KEY_NSGKFriendListUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSGKFriendListUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsgkfriendlistusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Hands-Tracking-Usage-Description"></a>

### Privacy - Hands Tracking Usage Description

**Setting name:** `INFOPLIST_KEY_NSHandsTrackingUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSHandsTrackingUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nshandstrackingusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Health-Records-Usage-Description"></a>

### Privacy - Health Records Usage Description

**Setting name:** `INFOPLIST_KEY_NSHealthClinicalHealthRecordsShareUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSHealthClinicalHealthRecordsShareUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nshealthclinicalhealthrecordsshareusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Health-Share-Usage-Description"></a>

### Privacy - Health Share Usage Description

**Setting name:** `INFOPLIST_KEY_NSHealthShareUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSHealthShareUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nshealthshareusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Health-Update-Usage-Description"></a>

### Privacy - Health Update Usage Description

**Setting name:** `INFOPLIST_KEY_NSHealthUpdateUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSHealthUpdateUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nshealthupdateusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-HomeKit-Usage-Description"></a>

### Privacy - HomeKit Usage Description

**Setting name:** `INFOPLIST_KEY_NSHomeKitUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSHomeKitUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nshomekitusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Copyright-Human-Readable"></a>

### Copyright (Human-Readable)

**Setting name:** `INFOPLIST_KEY_NSHumanReadableCopyright`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSHumanReadableCopyright](https://developer.apple.com/documentation/bundleresources/information-property-list/nshumanreadablecopyright) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Identity-Usage-Description"></a>

### Privacy - Identity Usage Description

**Setting name:** `INFOPLIST_KEY_NSIdentityUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSIdentityUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsidentityusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Local-Network-Usage-Description"></a>

### Privacy - Local Network Usage Description

**Setting name:** `INFOPLIST_KEY_NSLocalNetworkUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSLocalNetworkUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nslocalnetworkusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Location-Always-and-When-In-Use-Usage-Description"></a>

### Privacy - Location Always and When In Use Usage Description

**Setting name:** `INFOPLIST_KEY_NSLocationAlwaysAndWhenInUseUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSLocationAlwaysAndWhenInUseUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nslocationalwaysandwheninuseusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Location-Always-Usage-Description"></a>

### Privacy - Location Always Usage Description

**Setting name:** `INFOPLIST_KEY_NSLocationAlwaysUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSLocationAlwaysUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nslocationalwaysusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Location-Temporary-Usage-Description-Dictionary"></a>

### Privacy - Location Temporary Usage Description Dictionary

**Setting name:** `INFOPLIST_KEY_NSLocationTemporaryUsageDescriptionDictionary`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSLocationTemporaryUsageDescriptionDictionary](https://developer.apple.com/documentation/bundleresources/information-property-list/nslocationtemporaryusagedescriptiondictionary) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Location-Usage-Description"></a>

### Privacy - Location Usage Description

**Setting name:** `INFOPLIST_KEY_NSLocationUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSLocationUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nslocationusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Location-When-In-Use-Usage-Description"></a>

### Privacy - Location When In Use Usage Description

**Setting name:** `INFOPLIST_KEY_NSLocationWhenInUseUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSLocationWhenInUseUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nslocationwheninuseusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Main-Camera-Usage-Description"></a>

### Privacy - Main Camera Usage Description

**Setting name:** `INFOPLIST_KEY_NSMainCameraUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSMainCameraUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsmaincamerausagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Main-Nib-File-Base-Name"></a>

### Main Nib File Base Name

**Setting name:** `INFOPLIST_KEY_NSMainNibFile`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSMainNibFile](https://developer.apple.com/documentation/bundleresources/information-property-list/nsmainnibfile) key in the `Info.plist` file to the value of this build setting.

<a id="AppKit-Main-Storyboard-File-Base-Name"></a>

### AppKit Main Storyboard File Base Name

**Setting name:** `INFOPLIST_KEY_NSMainStoryboardFile`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSMainStoryboardFile](https://developer.apple.com/documentation/bundleresources/information-property-list/nsmainstoryboardfile) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Microphone-Usage-Description"></a>

### Privacy - Microphone Usage Description

**Setting name:** `INFOPLIST_KEY_NSMicrophoneUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSMicrophoneUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsmicrophoneusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Motion-Usage-Description"></a>

### Privacy - Motion Usage Description

**Setting name:** `INFOPLIST_KEY_NSMotionUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSMotionUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsmotionusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Nearby-Interaction-Allow-Once-Usage-Description"></a>

### Privacy - Nearby Interaction Allow Once Usage Description

**Setting name:** `INFOPLIST_KEY_NSNearbyInteractionAllowOnceUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSNearbyInteractionAllowOnceUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsnearbyinteractionallowonceusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Nearby-Interaction-Usage-Description"></a>

### Privacy - Nearby Interaction Usage Description

**Setting name:** `INFOPLIST_KEY_NSNearbyInteractionUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSNearbyInteractionUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsnearbyinteractionusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Network-Volumes-Usage-Description"></a>

### Privacy - Network Volumes Usage Description

**Setting name:** `INFOPLIST_KEY_NSNetworkVolumesUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSNetworkVolumesUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsnetworkvolumesusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Photo-Library-Additions-Usage-Description"></a>

### Privacy - Photo Library Additions Usage Description

**Setting name:** `INFOPLIST_KEY_NSPhotoLibraryAddUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSPhotoLibraryAddUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsphotolibraryaddusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Photo-Library-Usage-Description"></a>

### Privacy - Photo Library Usage Description

**Setting name:** `INFOPLIST_KEY_NSPhotoLibraryUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSPhotoLibraryUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsphotolibraryusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Principal-Class"></a>

### Principal Class

**Setting name:** `INFOPLIST_KEY_NSPrincipalClass`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSPrincipalClass](https://developer.apple.com/documentation/bundleresources/information-property-list/nsprincipalclass) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Reminders-Full-Access-Usage-Description"></a>

### Privacy - Reminders Full Access Usage Description

**Setting name:** `INFOPLIST_KEY_NSRemindersFullAccessUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSRemindersFullAccessUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsremindersfullaccessusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Reminders-Usage-Description"></a>

### Privacy - Reminders Usage Description

**Setting name:** `INFOPLIST_KEY_NSRemindersUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSRemindersUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsremindersusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Removable-Volumes-Usage-Description"></a>

### Privacy - Removable Volumes Usage Description

**Setting name:** `INFOPLIST_KEY_NSRemovableVolumesUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSRemovableVolumesUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsremovablevolumesusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-SensorKit-Privacy-Policy-URL"></a>

### Privacy - SensorKit Privacy Policy URL

**Setting name:** `INFOPLIST_KEY_NSSensorKitPrivacyPolicyURL`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSSensorKitPrivacyPolicyURL](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitprivacypolicyurl) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-SensorKit-Usage-Description"></a>

### Privacy - SensorKit Usage Description

**Setting name:** `INFOPLIST_KEY_NSSensorKitUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSSensorKitUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Siri-Usage-Description"></a>

### Privacy - Siri Usage Description

**Setting name:** `INFOPLIST_KEY_NSSiriUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSSiriUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nssiriusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Speech-Recognition-Usage-Description"></a>

### Privacy - Speech Recognition Usage Description

**Setting name:** `INFOPLIST_KEY_NSSpeechRecognitionUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSSpeechRecognitionUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsspeechrecognitionusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Sticker-Sharing-Level"></a>

### Sticker Sharing Level

**Setting name:** `INFOPLIST_KEY_NSStickerSharingLevel`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the NSStickerSharingLevel key in the `Info.plist` file to the value of this build setting.

<a id="Supports-Live-Activities"></a>

### Supports Live Activities

**Setting name:** `INFOPLIST_KEY_NSSupportsLiveActivities`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSSupportsLiveActivities](https://developer.apple.com/documentation/bundleresources/information-property-list/nssupportsliveactivities) key in the `Info.plist` file to the value of this build setting.

<a id="Supports-Frequent-Updates-of-Live-Activities"></a>

### Supports Frequent Updates of Live Activities

**Setting name:** `INFOPLIST_KEY_NSSupportsLiveActivitiesFrequentUpdates`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSSupportsLiveActivitiesFrequentUpdates](https://developer.apple.com/documentation/bundleresources/information-property-list/nssupportsliveactivitiesfrequentupdates) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-System-Administration-Usage-Description"></a>

### Privacy - System Administration Usage Description

**Setting name:** `INFOPLIST_KEY_NSSystemAdministrationUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSSystemAdministrationUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nssystemadministrationusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-System-Extension-Usage-Description"></a>

### Privacy - System Extension Usage Description

**Setting name:** `INFOPLIST_KEY_NSSystemExtensionUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the NSSystemExtensionUsageDescription key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Tracking-Usage-Description"></a>

### Privacy - Tracking Usage Description

**Setting name:** `INFOPLIST_KEY_NSUserTrackingUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSUserTrackingUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsusertrackingusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-TV-Provider-Usage-Description"></a>

### Privacy - TV Provider Usage Description

**Setting name:** `INFOPLIST_KEY_NSVideoSubscriberAccountUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSVideoSubscriberAccountUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsvideosubscriberaccountusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="View-Gesture-Recognizer-Is-Exclusive"></a>

### View Gesture Recognizer Is Exclusive

**Setting name:** `INFOPLIST_KEY_NSViewGestureRecognizerIsExclusive`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSViewGestureRecognizerIsExclusive](https://developer.apple.com/documentation/bundleresources/information-property-list/nsviewgesturerecognizerisexclusive) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-VoIP-Usage-Description"></a>

### Privacy - VoIP Usage Description

**Setting name:** `INFOPLIST_KEY_NSVoIPUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the NSVoIPUsageDescription key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-World-Sensing-Usage-Description"></a>

### Privacy - World Sensing Usage Description

**Setting name:** `INFOPLIST_KEY_NSWorldSensingUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [NSWorldSensingUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsworldsensingusagedescription) key in the `Info.plist` file to the value of this build setting.

<a id="Privacy-Driver-Extension-Usage-Description"></a>

### Privacy - Driver Extension Usage Description

**Setting name:** `INFOPLIST_KEY_OSBundleUsageDescription`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the OSBundleUsageDescription key in the `Info.plist` file to the value of this build setting.

<a id="Application-Scene-Manifest-Generation"></a>

### Application Scene Manifest (Generation)

**Setting name:** `INFOPLIST_KEY_UIApplicationSceneManifest_Generation`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [UIApplicationSceneManifest](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest) key in the Info.plist file to an entry suitable for a multi-window application.

<a id="Supports-Indirect-Events"></a>

### Supports Indirect Events

**Setting name:** `INFOPLIST_KEY_UIApplicationSupportsIndirectInputEvents`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [UIApplicationSupportsIndirectInputEvents](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationsupportsindirectinputevents) key in the `Info.plist` file to the value of this build setting.

<a id="Launch-Screen-Generation"></a>

### Launch Screen (Generation)

**Setting name:** `INFOPLIST_KEY_UILaunchScreen_Generation`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [UILaunchScreen](https://developer.apple.com/documentation/bundleresources/information-property-list/uilaunchscreen) key in the Info.plist file to an empty dictionary.

<a id="Launch-Screen-Interface-File-Base-Name"></a>

### Launch Screen Interface File Base Name

**Setting name:** `INFOPLIST_KEY_UILaunchStoryboardName`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [UILaunchStoryboardName](https://developer.apple.com/documentation/bundleresources/information-property-list/uilaunchstoryboardname) key in the `Info.plist` file to the value of this build setting.

<a id="UIKit-Main-Storyboard-File-Base-Name"></a>

### UIKit Main Storyboard File Base Name

**Setting name:** `INFOPLIST_KEY_UIMainStoryboardFile`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [UIMainStoryboardFile](https://developer.apple.com/documentation/bundleresources/information-property-list/uimainstoryboardfile) key in the `Info.plist` file to the value of this build setting.

<a id="Required-Device-Capabilities"></a>

### Required Device Capabilities

**Setting name:** `INFOPLIST_KEY_UIRequiredDeviceCapabilities`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [UIRequiredDeviceCapabilities](https://developer.apple.com/documentation/bundleresources/information-property-list/uirequireddevicecapabilities) key in the `Info.plist` file to the value of this build setting.

<a id="Requires-Full-Screen"></a>

### Requires Full Screen

**Setting name:** `INFOPLIST_KEY_UIRequiresFullScreen`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [UIRequiresFullScreen](https://developer.apple.com/documentation/bundleresources/information-property-list/uirequiresfullscreen) key in the `Info.plist` file to the value of this build setting.

<a id="Status-Bar-Initially-Hidden"></a>

### Status Bar Initially Hidden

**Setting name:** `INFOPLIST_KEY_UIStatusBarHidden`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [UIStatusBarHidden](https://developer.apple.com/documentation/bundleresources/information-property-list/uistatusbarhidden) key in the `Info.plist` file to the value of this build setting.

<a id="Status-Bar-Style"></a>

### Status Bar Style

**Setting name:** `INFOPLIST_KEY_UIStatusBarStyle`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [UIStatusBarStyle](https://developer.apple.com/documentation/bundleresources/information-property-list/uistatusbarstyle) key in the `Info.plist` file to the value of this build setting.

<a id="Supported-Interface-Orientations"></a>

### Supported Interface Orientations

**Setting name:** `INFOPLIST_KEY_UISupportedInterfaceOrientations`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [UISupportedInterfaceOrientations](https://developer.apple.com/documentation/bundleresources/information-property-list/uisupportedinterfaceorientations) key in the `Info.plist` file to the value of this build setting.

<a id="Supported-Interface-Orientations-iPad"></a>

### Supported Interface Orientations (iPad)

**Setting name:** `INFOPLIST_KEY_UISupportedInterfaceOrientations_iPad`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [UISupportedInterfaceOrientations~iPad](https://developer.apple.com/documentation/bundleresources/information-property-list/uisupportedinterfaceorientations) key in the `Info.plist` file to the value of this build setting.

<a id="Supported-Interface-Orientations-iPhone"></a>

### Supported Interface Orientations (iPhone)

**Setting name:** `INFOPLIST_KEY_UISupportedInterfaceOrientations_iPhone`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [UISupportedInterfaceOrientations~iPhone](https://developer.apple.com/documentation/bundleresources/information-property-list/uisupportedinterfaceorientations) key in the `Info.plist` file to the value of this build setting.

<a id="Supports-Document-Browser"></a>

### Supports Document Browser

**Setting name:** `INFOPLIST_KEY_UISupportsDocumentBrowser`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [UISupportsDocumentBrowser](https://developer.apple.com/documentation/bundleresources/information-property-list/uisupportsdocumentbrowser) key in the `Info.plist` file to the value of this build setting.

<a id="User-Interface-Style"></a>

### User Interface Style

**Setting name:** `INFOPLIST_KEY_UIUserInterfaceStyle`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [UIUserInterfaceStyle](https://developer.apple.com/documentation/bundleresources/information-property-list/uiuserinterfacestyle) key in the `Info.plist` file to the value of this build setting.

<a id="WatchKit-Companion-App-Bundle-Identifier"></a>

### WatchKit Companion App Bundle Identifier

**Setting name:** `INFOPLIST_KEY_WKCompanionAppBundleIdentifier`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [WKCompanionAppBundleIdentifier](https://developer.apple.com/documentation/bundleresources/information-property-list/wkcompanionappbundleidentifier) key in the `Info.plist` file to the value of this build setting.

<a id="WatchKit-Extension-Delegate-Class-Name"></a>

### WatchKit Extension Delegate Class Name

**Setting name:** `INFOPLIST_KEY_WKExtensionDelegateClassName`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [WKExtensionDelegateClassName](https://developer.apple.com/documentation/bundleresources/information-property-list/wkextensiondelegateclassname) key in the `Info.plist` file to the value of this build setting.

<a id="App-Can-Run-Independently-of-Companion-iPhone-App"></a>

### App Can Run Independently of Companion iPhone App

**Setting name:** `INFOPLIST_KEY_WKRunsIndependentlyOfCompanionApp`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [WKRunsIndependentlyOfCompanionApp](https://developer.apple.com/documentation/bundleresources/information-property-list/wkrunsindependentlyofcompanionapp) key in the `Info.plist` file to the value of this build setting.

<a id="Supports-Launch-for-Live-Activity-Attribute-Types"></a>

### Supports Launch for Live Activity Attribute Types

**Setting name:** `INFOPLIST_KEY_WKSupportsLiveActivityLaunchAttributeTypes`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the WKSupportsLiveActivityLaunchAttributeTypes key in the `Info.plist` file to the value of this build setting.

<a id="App-is-Available-Only-on-Apple-Watch"></a>

### App is Available Only on Apple Watch

**Setting name:** `INFOPLIST_KEY_WKWatchOnly`

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [WKWatchOnly](https://developer.apple.com/documentation/bundleresources/information-property-list/wkwatchonly) key in the `Info.plist` file to the value of this build setting.

<a id="Infoplist-Other-Preprocessor-Flags"></a>

### Info.plist Other Preprocessor Flags

**Setting name:** `INFOPLIST_OTHER_PREPROCESSOR_FLAGS`

Other flags to pass to the C preprocessor when preprocessing the `Info.plist` file.

<a id="Infoplist-Output-Encoding"></a>

### Info.plist Output Encoding

**Setting name:** `INFOPLIST_OUTPUT_FORMAT`

Specifies the output encoding for the output `Info.plist`. The output encodings can be `binary` or `XML`. By default, the output encoding will be unchanged from the input.

<a id="INFOPLISTPATH"></a>

### INFOPLIST_PATH

**Setting name:** `INFOPLIST_PATH`

Specifies the path to the bundle’s information property list file.

<a id="Infoplist-Preprocessor-Prefix-File"></a>

### Info.plist Preprocessor Prefix File

**Setting name:** `INFOPLIST_PREFIX_HEADER`

Implicitly include the given file when preprocessing the `Info.plist` file. The path given should either be a project relative path or an absolute path.

<a id="Preprocess-Infoplist-File"></a>

### Preprocess Info.plist File

**Setting name:** `INFOPLIST_PREPROCESS`

Preprocess the `Info.plist` file using the C Preprocessor.

<a id="Infoplist-Preprocessor-Definitions"></a>

### Info.plist Preprocessor Definitions

**Setting name:** `INFOPLIST_PREPROCESSOR_DEFINITIONS`

Space-separated list of preprocessor macros of the form `foo` or `foo=bar`. These macros are used when preprocessing the `Info.plist` file.

<a id="INFOSTRINGSPATH"></a>

### INFOSTRINGS_PATH

**Setting name:** `INFOSTRINGS_PATH`

Specifies the file that contains the bundle’s localized strings file.

<a id="Initialization-Routine"></a>

### Initialization Routine

**Setting name:** `INIT_ROUTINE`

This is the name of the routine to use for initialization.

<a id="Enable-Text-Based-Stubs-Inlining"></a>

### Enable Text-Based Stubs Inlining

**Setting name:** `INLINE_PRIVATE_FRAMEWORKS`

Enables private framework inlining for Text-Based Stubs.

<a id="Perform-Copy-Files-Phases-During-installhdrs"></a>

### Perform Copy Files Phases During \`installhdrs\`

**Setting name:** `INSTALLHDRS_COPY_PHASE`

Specifies whether the target’s Copy Files build phases are executed in `installhdr` builds.

<a id="Perform-Shell-Script-Phases-During-installhdrs"></a>

### Perform Shell Script Phases During \`installhdrs\`

**Setting name:** `INSTALLHDRS_SCRIPT_PHASE`

Specifies whether the target’s Run Script build phases are executed in `installhdr` builds. See `ACTION` for details on `installhdr` builds.

<a id="INSTALLDIR"></a>

### INSTALL_DIR

**Setting name:** `INSTALL_DIR`

Identifies the directory in the developer’s filesystem into which the *installed* product is placed.

<a id="Install-Group"></a>

### Install Group

**Setting name:** `INSTALL_GROUP`

The group name or `gid` for installed products.

<a id="Install-Permissions"></a>

### Install Permissions

**Setting name:** `INSTALL_MODE_FLAG`

Permissions used for installed product files.

<a id="Install-Owner"></a>

### Install Owner

**Setting name:** `INSTALL_OWNER`

The owner name or `uid` for installed products.

<a id="Installation-Directory"></a>

### Installation Directory

**Setting name:** `INSTALL_PATH`

The directory in which to install the build products. This path is prepended by the `DSTROOT`.

<a id="Intent-Class-Generation-Language"></a>

### Intent Class Generation Language

**Setting name:** `INTENTS_CODEGEN_LANGUAGE`

The Source-code language to use for generated Intent class.  By default “Automatic” will analyze your project to determine the correct language.  Adjust this setting to explicitly select “Swift” or “Objective-C”.

<a id="Building-for-Mac-Catalyst"></a>

### Building for Mac Catalyst

**Setting name:** `IS_MACCATALYST`

Indicates whether the target is building for Mac Catalyst. This build setting is intended for use in shell scripts and build setting composition and should be considered read-only.

<a id="Preserve-Private-External-Symbols"></a>

### Preserve Private External Symbols

**Setting name:** `KEEP_PRIVATE_EXTERNS`

Activating this setting will preserve private external symbols, rather than turning them into static symbols. This setting is also respected when performing a single-object prelink.

<a id="Launch-Constraint-Parent-Process-Plist"></a>

### Launch Constraint Parent Process Plist

**Setting name:** `LAUNCH_CONSTRAINT_PARENT`

A path to a plist representation of a Requirements Dictionary indicating the desired constraint on the parent of this binary.

<a id="Launch-Constraint-Responsible-Process-Plist"></a>

### Launch Constraint Responsible Process Plist

**Setting name:** `LAUNCH_CONSTRAINT_RESPONSIBLE`

A path to a plist representation of a Requirements Dictionary indicating the desired constraint on the responsible process for this binary.

<a id="Launch-Constraint-Process-Plist"></a>

### Launch Constraint Process Plist

**Setting name:** `LAUNCH_CONSTRAINT_SELF`

A path to a plist representation of a Requirements Dictionary indicating the desired constraint on this binary.

<a id="Client-Name"></a>

### Client Name

**Setting name:** `LD_CLIENT_NAME`

This setting passes the value with `-client_name` when linking the executable.

<a id="Path-to-Linker-Dependency-Info-File"></a>

### Path to Linker Dependency Info File

**Setting name:** `LD_DEPENDENCY_INFO_FILE`

This setting defines the path to which the linker should emit information about what files it used as inputs and generated. Xcode uses this information for its dependency tracking. Setting the value of this setting to empty will disable passing this option to the linker.

<a id="Dynamic-Library-Allowable-Clients"></a>

### Dynamic Library Allowable Clients

**Setting name:** `LD_DYLIB_ALLOWABLE_CLIENTS`

This setting restricts the clients allowed to link a dylib by passing `-allowable_client` to the linker for each supplied value.

<a id="Dynamic-Library-Install-Name"></a>

### Dynamic Library Install Name

**Setting name:** `LD_DYLIB_INSTALL_NAME`

Sets an internal `install path` (`LC_ID_DYLIB`) in a dynamic library. Any clients linked against the library will record that path as the way `dyld` should locate this library. If this option is not specified, then the `-o` path will be used. This setting is ignored when building any product other than a dynamic library. See [Dynamic Library Programming Topics](https://developer.apple.com/library/content/documentation/DeveloperTools/Conceptual/DynamicLibraries/000-Introduction/Introduction.html).

<a id="Dynamic-Linker-Environment"></a>

### Dynamic Linker Environment

**Setting name:** `LD_ENVIRONMENT`

This setting allows `key=value` pairs of `dyld` environment variables to be embedded in a generated executable as `LC_DYLD_ENVIRONMENT` load commands in order to supplement the environment in which the executable is launched, if allowed by the platform and its security environment.

<a id="Export-Symbols"></a>

### Export Symbols

**Setting name:** `LD_EXPORT_SYMBOLS`

Export symbols from the binaries. Disabling this setting can be useful for binaries which have no API or plug-ins and thus need no symbol exports. \[-no_exported_symbols\]

<a id="Write-Link-Map-File"></a>

### Write Link Map File

**Setting name:** `LD_GENERATE_MAP_FILE`

Activating this setting will cause the linker to write a map file to disk, which details all symbols and their addresses in the output image. The path to the map file is defined by the `LD_MAP_FILE_PATH` setting.

<a id="Path-to-Link-Map-File"></a>

### Path to Link Map File

**Setting name:** `LD_MAP_FILE_PATH`

This setting defines the path to the map file written by the linker when the `LD_GENERATE_MAP_FILE` setting is activated. By default, a separate file will be written for each architecture and build variant, and these will be generated in the Intermediates directory for the target whose product is being linked.

<a id="Generate-Position-Dependent-Executable"></a>

### Generate Position-Dependent Executable

**Setting name:** `LD_NO_PIE`

Activating this setting will prevent Xcode from building a main executable that is position independent (PIE). When targeting macOS 10.7 or later, PIE is the default for main executables, so activating this setting will change that behavior. When targeting OS X 10.6 or earlier, or when building for i386, PIE is not the default, so activating this setting does nothing.

You cannot create a PIE from `.o` files compiled with `-mdynamic-no-pic`. Using PIE means the codegen is less optimal, but the address randomization adds some security.

<a id="Quote-Linker-Arguments"></a>

### Quote Linker Arguments

**Setting name:** `LD_QUOTE_LINKER_ARGUMENTS_FOR_COMPILER_DRIVER`

This setting controls whether arguments to the linker should be quoted using `-Xlinker`. By default, Xcode invokes the linker by invoking the driver of the compiler used to build the source files in the target, and passing `-Xlinker` to quote arguments will cause the compiler driver to pass them through to the linker (rather than trying to evaluate them within the driver). By default, this setting is enabled. Disabling it will cause Xcode to not use `-Xlinker` to pass arguments to the linker. Disabling this setting is useful if the target has instructed Xcode to use an alternate linker (for example, by setting the `LD` setting to the path to another linker) and that alternate linker does not recognize `-Xlinker`.

<a id="Runpath-Search-Paths"></a>

### Runpath Search Paths

**Setting name:** `LD_RUNPATH_SEARCH_PATHS`

This is a list of paths to be added to the `runpath` search path list for the image being created. At runtime, `dyld` uses the `runpath` when searching for dylibs whose load path begins with `@rpath/`. See [Dynamic Library Programming Topics](https://developer.apple.com/library/content/documentation/DeveloperTools/Conceptual/DynamicLibraries/000-Introduction/Introduction.html).

<a id="Duplicate-Libraries"></a>

### Duplicate Libraries

**Setting name:** `LD_WARN_DUPLICATE_LIBRARIES`

Warn for linking the same library multiple times.

<a id="Unused-Dylibs"></a>

### Unused Dylibs

**Setting name:** `LD_WARN_UNUSED_DYLIBS`

Warn for any dylib linked to but not used.

<a id="Other-Lex-Flags"></a>

### Other Lex Flags

**Setting name:** `LEXFLAGS`

Space-separated list of additional flags to pass to `lex`. Be sure to backslash-escape any arguments that contain spaces or special characters, such as path names that may contain spaces. Use this setting if Xcode does not already provide UI for a `lex` flag.

<a id="Generate-Case-Insensitive-Scanner"></a>

### Generate Case-Insensitive Scanner

**Setting name:** `LEX_CASE_INSENSITIVE_SCANNER`

Enabling this option causes `lex` to generate a case-insensitive scanner. The case of letters given in the `lex` input patterns will be ignored, and tokens in the input will be matched regardless of case. The matched text given in `yytext` will have the preserved case (for example, it will not be folded).

<a id="Insert-line-Directives"></a>

### Insert #line Directives

**Setting name:** `LEX_INSERT_LINE_DIRECTIVES`

Enabling this option instructs `lex` to insert `#line` directives so error messages in the actions will be correctly located with respect to either the original `lex` input file (if the errors are due to code in the input file), or `lex.yy.c` (if the errors are `lex`’s fault). This option is enabled by default; disabling it passes a flag to `lex` to not insert `#line` directives.

<a id="Suppress-Default-Rule"></a>

### Suppress Default Rule

**Setting name:** `LEX_SUPPRESS_DEFAULT_RULE`

Enabling this option causes the default rule (that unmatched scanner input is echoed to `stdout`) to be suppressed. If the scanner encounters input that does not match any of its rules, it aborts with an error. This option is useful for finding holes in a scanner’s rule set.

<a id="Suppress-Warning-Messages"></a>

### Suppress Warning Messages

**Setting name:** `LEX_SUPPRESS_WARNINGS`

Enabling this option causes `lex` to suppress its warning messages.

<a id="Library-Load-Constraint-Plist"></a>

### Library Load Constraint Plist

**Setting name:** `LIBRARY_LOAD_CONSTRAINT`

A path to a plist representation of a Requirements Dictionary that specifies the desired set of libraries that can be loaded by this process. Supported when building on macOS 14 or later.

<a id="Library-Search-Paths"></a>

### Library Search Paths

**Setting name:** `LIBRARY_SEARCH_PATHS`

This is a list of paths to folders to be searched by the linker for libraries used by the product. Paths are delimited by whitespace, so any paths with spaces in them need to be properly quoted.

<a id="Display-Mangled-Names"></a>

### Display Mangled Names

**Setting name:** `LINKER_DISPLAYS_MANGLED_NAMES`

Activating this setting causes the linker to display mangled names for C++ symbols. Normally, this is not recommended, but turning it on can help to diagnose and solve C++ link errors.

<a id="Link-With-Standard-Libraries"></a>

### Link With Standard Libraries

**Setting name:** `LINK_WITH_STANDARD_LIBRARIES`

When this setting is enabled, the compiler driver will automatically pass its standard libraries to the linker to use during linking. If desired, this flag can be used to disable linking with the standard libraries, and then individual libraries can be passed as `OTHER_LDFLAGS`.

<a id="Link-Time-Optimization"></a>

### Link-Time Optimization

**Setting name:** `LLVM_LTO`

Enabling this setting allows optimization across file boundaries during linking.

- *No:* Disabled. Do not use link-time optimization.
- *Monolithic Link-Time Optimization:* This mode performs monolithic link-time optimization of binaries, combining all executable code into a single unit and running aggressive compiler optimizations.
- *Incremental Link-Time Optimization:* This mode performs partitioned link-time optimization of binaries, inlining between compilation units and running aggressive compiler optimizations on each unit in parallel. This enables fast incremental builds and uses less memory than Monolithic LTO.

<a id="Localization-Export-Supported"></a>

### Localization Export Supported

**Setting name:** `LOCALIZATION_EXPORT_SUPPORTED`

When enabled, localizable content in this target/project can be exported.

<a id="Localization-Prefers-String-Catalogs"></a>

### Localization Prefers String Catalogs

**Setting name:** `LOCALIZATION_PREFERS_STRING_CATALOGS`

When enabled, string tables generated in a localization export will prefer the String Catalog format.

<a id="Localized-Strings-in-Code-Comments"></a>

### Localized Strings in Code Comments

**Setting name:** `LOCALIZED_STRING_CODE_COMMENTS`

When enabled, localizable strings wrapped in NSLocalizedString and similar string macros will be extracted even if commented out or wrapped in `#if 0`.

<a id="Localized-String-Macro-Names"></a>

### Localized String Macro Names

**Setting name:** `LOCALIZED_STRING_MACRO_NAMES`

The base names for NSLocalizedString-like macros or functions used to produce localized strings in source code. The default base names of NSLocalizedString and CFCopyLocalizedString are always considered, even if this setting is empty.

<a id="Localized-String-SwiftUI-Support"></a>

### Localized String SwiftUI Support

**Setting name:** `LOCALIZED_STRING_SWIFTUI_SUPPORT`

When enabled, literal strings in SwiftUI will be extracted during localization export. This will only extract string literals in `Text()` initializers, unless `SWIFT_EMIT_LOC_STRINGS` is also enabled.

<a id="Mach-O-Type"></a>

### Mach-O Type

**Setting name:** `MACH_O_TYPE`

This setting determines the format of the produced binary and how it can be linked when building other binaries. For information on binary types, see [Building Mach-O Files](https://developer.apple.com/library/content/documentation/DeveloperTools/Conceptual/MachOTopics/1-Articles/building_files.html#//apple_ref/doc/uid/TP40001828-SW1) in [Mach-O Programming Topics](https://developer.apple.com/library/content/documentation/DeveloperTools/Conceptual/MachOTopics/0-Introduction/introduction.html).

- *Executable:* Executables and standalone binaries and cannot be linked. \[mh_execute\]
- *Dynamic Library:* Dynamic libraries are linked at build time and loaded automatically when needed. \[mh_dylib\]
- *Bundle:* Bundle libraries are loaded explicitly at run time. \[mh_bundle\]
- *Static Library:* Static libraries are linked at build time and loaded at execution time. \[staticlib\]
- *Relocatable Object File:* Object files are single-module files that are linked at build time. \[mh_object\]

<a id="Suppress-all-mapc-warnings"></a>

### Suppress all mapc warnings

**Setting name:** `MAPC_NO_WARNINGS`

Compile `.xcmappingmodel` files into `.cdm` without reporting warnings.

<a id="Marketing-Version"></a>

### Marketing Version

**Setting name:** `MARKETING_VERSION`

This setting defines the user-visible version of the project.

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [CFBundleShortVersionString](https://developer.apple.com/documentation/bundleresources/information-property-list/cfbundleshortversionstring) key in the `Info.plist` file to the value of this build setting.

<a id="Alternative-Distribution-Marketplaces"></a>

### Alternative Distribution - Marketplaces

**Setting name:** `MARKETPLACES`

Enable overriding your app’s distributor identifier with a list of additional marketplace identifiers when running from Xcode.

<a id="Build-Mergeable-Library"></a>

### Build Mergeable Library

**Setting name:** `MERGEABLE_LIBRARY`

For dynamic libraries and frameworks, links this target’s binary as a mergeable library which can be merged into the product of a target which depends on it if that target is configured to do so. This target will be linked as a mergeable library in release builds so it can be merged, but will instead be linked as a normal dynamic library to be reexported in debug builds. For other binary types, this setting has no effect.

For more information on mergeable libraries, see [Configuring your project to use mergeable libraries](https://developer.apple.com/documentation/xcode/configuring-your-project-to-use-mergeable-libraries).

<a id="Create-Merged-Binary"></a>

### Create Merged Binary

**Setting name:** `MERGED_BINARY_TYPE`

Use this setting to link the target’s binary by combining it with mergeable libraries it links against to create a single binary. Only applies to executables, dynamic libraries and frameworks.

- When set to Automatic, this target’s immediate dependencies which build dynamic libraries or frameworks and are in its Link Binaries With Libraries will automatically be built as mergeable libraries and merged into this target’s binary during release builds, or reexported during debug builds.
- When set to Manual, only immediate dependencies which have Build Mergeable Library explicitly enabled will be merged or reexported.

For more information on mergeable libraries, see [Configuring your project to use mergeable libraries](https://developer.apple.com/documentation/xcode/configuring-your-project-to-use-mergeable-libraries).

<a id="Module-Map-File"></a>

### Module Map File

**Setting name:** `MODULEMAP_FILE`

This is the project-relative path to the LLVM module map file that defines the module structure for the compiler. If empty, it will be automatically generated for appropriate products when `DEFINES_MODULE` is enabled.

<a id="Private-Module-Map-File"></a>

### Private Module Map File

**Setting name:** `MODULEMAP_PRIVATE_FILE`

This is the project-relative path to the LLVM module map file that defines the module structure for private headers.

<a id="MODULESFOLDERPATH"></a>

### MODULES_FOLDER_PATH

**Setting name:** `MODULES_FOLDER_PATH`

Specifies the directory that contains the product’s Clang module maps and Swift module content.

<a id="MODULECACHEDIR"></a>

### MODULE_CACHE_DIR

**Setting name:** `MODULE_CACHE_DIR`

Absolute path of folder in which compiler stores its cached modules—this cache is a performance improvement.

<a id="Module-Identifier"></a>

### Module Identifier

**Setting name:** `MODULE_NAME`

This is the identifier of the kernel module listed in the generated stub. This is only used when building kernel extensions.

<a id="Module-Start-Routine"></a>

### Module Start Routine

**Setting name:** `MODULE_START`

This defines the name of the kernel module start routine. This is only used when building kernel extensions.

<a id="Module-Stop-Routine"></a>

### Module Stop Routine

**Setting name:** `MODULE_STOP`

This defines the name of the kernel module stop routine. This is only used when building kernel extensions.

<a id="Supported-Languages"></a>

### Supported Languages

**Setting name:** `MODULE_VERIFIER_SUPPORTED_LANGUAGES`

Languages to verify the module, i.e. the languages supported for framework clients. Allowed values are ‘c’, ‘c++’, ‘objective-c’, ‘objective-c++’

<a id="Supported-Language-Dialects"></a>

### Supported Language Dialects

**Setting name:** `MODULE_VERIFIER_SUPPORTED_LANGUAGE_STANDARDS`

Language dialects to verify the module, i.e. the language dialects supported for framework clients. Allowed values are ‘ansi’, ‘c89’, ‘gnu89’, ‘c99’, ‘gnu99’, ‘c11’, ‘gnu11’, ‘c17’, ‘gnu17’, ‘c23’, ‘gnu23’, ‘c++98’, ‘gnu++98’, ‘c++11’, ‘gnu++11’, ‘c++14’, ‘gnu++14’, ‘c++17’, ‘gnu++17’, ‘c++20’, ‘gnu++20’, ‘c++23’, ‘gnu++23’

<a id="Module-Version"></a>

### Module Version

**Setting name:** `MODULE_VERSION`

This is the version of the kernel module listed in the generated stub. This is only used when building kernel extensions.

<a id="Suppress-momc-warnings-for-delete-rules"></a>

### Suppress momc warnings for delete rules

**Setting name:** `MOMC_NO_DELETE_RULE_WARNINGS`

Suppress managed object model compiler (`momc`) warnings for delete rules during the compilation of `.xcdatamodel(d)` files.

<a id="Suppress-momc-warnings-on-missing-inverse-relationships"></a>

### Suppress momc warnings on missing inverse relationships

**Setting name:** `MOMC_NO_INVERSE_RELATIONSHIP_WARNINGS`

Suppress managed object model compiler (`momc`) warnings from output on missing inverse relationships during the compilation of `.xcdatamodel(d)` files

<a id="Suppress-momc-warnings-for-entities-with-more-than-100-properties"></a>

### Suppress momc warnings for entities with more than 100 properties

**Setting name:** `MOMC_NO_MAX_PROPERTY_COUNT_WARNINGS`

Suppress managed object model compiler (`momc`) warnings from output on entities with more than 100 properties during the compilation of `.xcdatamodel(d)` files.

<a id="Suppress-all-momc-warnings"></a>

### Suppress all momc warnings

**Setting name:** `MOMC_NO_WARNINGS`

Suppress managed object model compiler (`momc`) warnings from output during the compilation of `.xcdatamodel(d)` files

<a id="Suppress-momc-error-on-transient-inverse-relationships"></a>

### Suppress momc error on transient inverse relationships

**Setting name:** `MOMC_SUPPRESS_INVERSE_TRANSIENT_ERROR`

Suppress managed object model compiler (`momc`) warnings from output on transient inverse relationships during the compilation of `.xcdatamodel(d)` files. This is only intended to be used on 10.4.x created models that compiled properly in 10.4.x before the error was introduced in 10.5

<a id="Other-Metal-Linker-Flags"></a>

### Other Metal Linker Flags

**Setting name:** `MTLLINKER_FLAGS`

Space-separated list of metal linker flags

<a id="Other-Metal-Compiler-Flags"></a>

### Other Metal Compiler Flags

**Setting name:** `MTL_COMPILER_FLAGS`

Space-separated list of compiler flags

<a id="Produce-Debugging-Information"></a>

### Produce Debugging Information

**Setting name:** `MTL_ENABLE_DEBUG_INFO`

Debugging information is required for shader debugging and profiling.

<a id="Enable-Index-While-Building-Functionality-Metal"></a>

### Enable Index-While-Building Functionality (Metal)

**Setting name:** `MTL_ENABLE_INDEX_STORE`

Control whether the compiler should emit index data while building.

<a id="Enable-Modules-Metal"></a>

### Enable Modules (Metal)

**Setting name:** `MTL_ENABLE_MODULES`

Enable the use of modules. Headers are imported as semantic modules instead of raw headers. This can result in faster builds and project indexing.

- *All:* Enable for all headers.
- *Standard library:* Enable for standard library headers only (default).
- *None:* Disable the feature.

<a id="Enable-Fast-Math"></a>

### Enable Fast Math

**Setting name:** `MTL_FAST_MATH`

Enable optimizations for floating-point arithmetic that may violate the IEEE 754 standard and disable the high precision variant of math functions for single and half precision floating-point.

<a id="Header-Search-Paths"></a>

### Header Search Paths

**Setting name:** `MTL_HEADER_SEARCH_PATHS`

This is a list of paths to folders to be searched by the compiler for included or imported header files when compiling Metal. Paths are delimited by whitespace, so any paths with spaces in them need to be properly quoted. \[MTL_HEADER_SEARCH_PATHS, -I\]

<a id="Ignore-Warnings"></a>

### Ignore Warnings

**Setting name:** `MTL_IGNORE_WARNINGS`

Enabling this option causes all warnings to be ignored.  \[MTL_IGNORE_WARNINGS, -W\]

<a id="Metal-Language-Revision"></a>

### Metal Language Revision

**Setting name:** `MTL_LANGUAGE_REVISION`

Determine the language revision to use. A value for this option must be provided.

<a id="Single-Precision-Floating-Point-Functions"></a>

### Single-Precision Floating Point Functions

**Setting name:** `MTL_MATH_FP32_FUNCTIONS`

Controls default math functions for single precision floating-point

<a id="Math-Mode"></a>

### Math Mode

**Setting name:** `MTL_MATH_MODE`

Controls floating-point optimizations

<a id="Optimization-Level"></a>

### Optimization Level

**Setting name:** `MTL_OPTIMIZATION_LEVEL`

Optimization level for the Metal compiler.

- *Default:* Optimize for program performance \[-O2\]. This setting applies a moderate level of optimization that enables most optimizations.
- *Size:* Like default, with extra optimizations to reduce code size \[-Os\]. This setting limits optimizations that increase code size, such as loop unrolling and function inlining, and enables other optimizations for size. It may reduce compile time and compiler memory in cases where optimizing for performance results in very large code.

<a id="Preprocessor-Definitions"></a>

### Preprocessor Definitions

**Setting name:** `MTL_PREPROCESSOR_DEFINITIONS`

Space-separated list of preprocessor macros of the form “foo” or “foo=bar”.

<a id="Treat-Warnings-as-Errors"></a>

### Treat Warnings as Errors

**Setting name:** `MTL_TREAT_WARNINGS_AS_ERRORS`

Enabling this option causes all warnings to be treated as errors.  \[MTL_TREAT_WARNINGS_AS_ERRORS, -Werror\]

<a id="NATIVEARCH"></a>

### NATIVE_ARCH

**Setting name:** `NATIVE_ARCH`

Identifies the architecture on which the build is being performed.

<a id="OBJECTFILEDIR"></a>

### OBJECT_FILE_DIR

**Setting name:** `OBJECT_FILE_DIR`

Partially identifies the directory into which variant object files are placed. The complete specification is computed using the variants of this build setting.

<a id="Intermediate-Build-Files-Path"></a>

### Intermediate Build Files Path

**Setting name:** `OBJROOT`

The path where intermediate files will be placed during a build. Intermediate files include generated sources, object files, etc. Shell script build phases can place and access files here, as well. Typically this path is not set per target, but is set per project or per user. By default, this is set to `$(PROJECT_DIR)/build`.

<a id="Build-Active-Architecture-Only"></a>

### Build Active Architecture Only

**Setting name:** `ONLY_ACTIVE_ARCH`

If enabled, only the active architecture is built. This setting will be ignored when building with a run destination which does not define a specific architecture, such as a ‘Generic Device’ run destination, or if the ‘Override Architectures’ scheme option is set to ‘Match Run Destination’ or ‘Universal’.

<a id="On-Demand-Resources-Initial-Install-Tags"></a>

### On Demand Resources Initial Install Tags

**Setting name:** `ON_DEMAND_RESOURCES_INITIAL_INSTALL_TAGS`

Defined a set of initial On Demand Resources tags to be downloaded and installed with your application.

<a id="On-Demand-Resources-Prefetch-Order"></a>

### On Demand Resources Prefetch Order

**Setting name:** `ON_DEMAND_RESOURCES_PREFETCH_ORDER`

Once your app is installed, this defined a set of On Demand Resources tags that should be downloaded. These tags are downloaded after the initial installation of your application, and will be downloaded in the order the tags provided in the list from first to last.

<a id="OpenCL-Architectures"></a>

### OpenCL Architectures

**Setting name:** `OPENCL_ARCHS`

A list of the architectures for which the product will be built. This is usually set to a predefined build setting provided by the platform.

<a id="Auto-vectorizer"></a>

### Auto-vectorizer

**Setting name:** `OPENCL_AUTO_VECTORIZE_ENABLE`

Auto-vectorizes the `OpenCL` kernels for the CPU. This setting takes effect only for the CPU. This makes it possible to write a single kernel that is portable and performant across CPUs and GPUs.

<a id="OpenCL-Compiler-Version"></a>

### OpenCL Compiler Version

**Setting name:** `OPENCL_COMPILER_VERSION`

The `OpenCL` C compiler version supported by the platform.

<a id="Flush-denorms-to-zero"></a>

### Flush denorms to zero

**Setting name:** `OPENCL_DENORMS_ARE_ZERO`

This option controls how single precision and double precision denormalized numbers are handled. If specified as a build option, the single precision denormalized numbers may be flushed to zero; double precision denormalized numbers may also be flushed to zero if the optional extension for double precision is supported. This is intended to be a performance hint and the `OpenCL` compiler can choose not to flush denorms to zero if the device supports single precision (or double precision) denormalized numbers.

This option is ignored for single precision numbers if the device does not support single precision denormalized numbers, for example, `CL_FP_DENORM` bit is not set in `CL_DEVICE_SINGLE_FP_CONFIG`.

This option is ignored for double precision numbers if the device does not support double precision or if it does support double precision but not double precision denormalized numbers, for example, `CL_FP_DENORM` bit is not set in `CL_DEVICE_DOUBLE_FP_CONFIG`.

This flag only applies for scalar and vector single precision floating-point variables and computations on these floating-point variables inside a program. It does not apply to reading from or writing to image objects.

<a id="Double-as-single"></a>

### Double as single

**Setting name:** `OPENCL_DOUBLE_AS_SINGLE`

Treat double precision floating-point expression as a single precision floating-point expression. This option is available for GPUs only.

<a id="Relax-IEEE-Compliance"></a>

### Relax IEEE Compliance

**Setting name:** `OPENCL_FAST_RELAXED_MATH`

This allows optimizations for floating-point arithmetic that may violate the IEEE 754 standard and the `OpenCL` numerical compliance requirements defined in in section 7.4 for single-precision floating-point, section 9.3.9 for double-precision floating-point, and edge case behavior in section 7.5 of the `OpenCL` 1.1 specification.

This is intended to be a performance optimization.

This option causes the preprocessor macro `__FAST_RELAXED_MATH__` to be defined in the `OpenCL` program.

<a id="Use-MAD"></a>

### Use MAD

**Setting name:** `OPENCL_MAD_ENABLE`

Allow `a * b + c` to be replaced by a `mad` instruction. The `mad` computes `a * b + c` with reduced accuracy. For example, some `OpenCL` devices implement `mad` as truncate the result of `a * b` before adding it to `c`.

This is intended to be a performance optimization.

<a id="Optimization-Level"></a>

### Optimization Level

**Setting name:** `OPENCL_OPTIMIZATION_LEVEL`

- *None:* Do not optimize. \[-O0\] With this setting, the compiler’s goal is to reduce the cost of compilation and to make debugging produce the expected results. Statements are independent: if you stop the program with a breakpoint between statements, you can then assign a new value to any variable or change the program counter to any other statement in the function and get exactly the results you would expect from the source code.
- *Fast:* Optimizing compilation takes somewhat more time, and a lot more memory for a large function. \[-O, -O1\] With this setting, the compiler tries to reduce code size and execution time, without performing any optimizations that take a great deal of compilation time. In Apple’s compiler, strict aliasing, block reordering, and inter-block scheduling are disabled by default when optimizing.
- *Faster:* The compiler performs nearly all supported optimizations that do not involve a space-speed tradeoff. \[-O2\] With this setting, the compiler does not perform loop unrolling or function inlining, or register renaming. As compared to the `Fast` setting, this setting increases both compilation time and the performance of the generated code.
- *Fastest:* Turns on all optimizations specified by the `Faster` setting and also turns on function inlining and register renaming options. This setting may result in a larger binary. \[-O3\]
- *Fastest, smallest:* Optimize for size. This setting enables all `Faster` optimizations that do not typically increase code size. It also performs further optimizations designed to reduce code size. \[-Os\]

<a id="OpenCL-Other-Flags"></a>

### OpenCL Other Flags

**Setting name:** `OPENCL_OTHER_BC_FLAGS`

Space-separated list of additional flags to pass to the compiler. Be sure to backslash-escape any arguments that contain spaces or special characters, such as path names that may contain spaces. Use this setting if Xcode does not already provide UI for a particular compiler flag.

<a id="OpenCL-Preprocessor-Macros"></a>

### OpenCL Preprocessor Macros

**Setting name:** `OPENCL_PREPROCESSOR_DEFINITIONS`

Space-separated list of preprocessor macros of the form `foo` or `foo=bar`.

<a id="Order-File"></a>

### Order File

**Setting name:** `ORDER_FILE`

The path to a file that alters the order in which functions and data are laid out.

For each section in the output file, any symbol in that section that are specified in the order file is moved to the start of its section and laid out in the same order as in the order file. Order files are text files with one symbol name per line. Lines starting with a `#` are comments. A symbol name may be optionally preceded with its object file leafname and a colon (for example, `foo.o:_foo`). This is useful for static functions/data that occur in multiple files. A symbol name may also be optionally preceded with the architecture (for example, `ppc:_foo` or `ppc:foo.o:_foo`). This enables you to have one order file that works for multiple architectures. Literal C-strings may be ordered by quoting the string in the order file (for example, `"Hello, world\n"`).

Generally you should not specify an order file in Debug or Development configurations, as this will make the linked binary less readable to the debugger. Use them only in Release or Deployment configurations.

<a id="Save-as-Execute-Only"></a>

### Save as Execute-Only

**Setting name:** `OSACOMPILE_EXECUTE_ONLY`

Saves the output script in execute-only form; the script can be run, but cannot be opened in Script Editor or Xcode. With this option turned off, a user may see the original script source by opening the script.

<a id="Other-C-Flags"></a>

### Other C Flags

**Setting name:** `OTHER_CFLAGS`

Space-separated list of additional flags to pass to the compiler for C and Objective-C files. Be sure to backslash-escape any arguments that contain spaces or special characters, such as path names that may contain spaces. Use this setting if Xcode does not already provide UI for a particular C or Objective-C compiler flag.

<a id="Other-Code-Signing-Flags"></a>

### Other Code Signing Flags

**Setting name:** `OTHER_CODE_SIGN_FLAGS`

A list of additional options to pass to `codesign(1)`.

<a id="Other-C++-Flags"></a>

### Other C++ Flags

**Setting name:** `OTHER_CPLUSPLUSFLAGS`

Space-separated list of additional flags to pass to the compiler for C++ and Objective-C++ files. Be sure to backslash-escape any arguments that contain spaces or special characters, such as path names that may contain spaces. Use this setting if Xcode does not already provide UI for a C++ or Objective-C++ compiler flag.

<a id="Other-DocC-Flags"></a>

### Other DocC Flags

**Setting name:** `OTHER_DOCC_FLAGS`

A list of additional flags to pass to DocC

<a id="Other-IIG-C-Flags"></a>

### Other IIG C Flags

**Setting name:** `OTHER_IIG_CFLAGS`

Space-separated list of additional flags to pass to the `iig` invocation of clang. Be sure to backslash-escape any arguments that contain spaces or special characters, such as path names that may contain spaces. Use this setting if Xcode does not already provide UI for a particular `iig` flag

<a id="Other-IIG-Flags"></a>

### Other IIG Flags

**Setting name:** `OTHER_IIG_FLAGS`

Space-separated list of additional flags to pass to the `iig` compiler. Be sure to backslash-escape any arguments that contain spaces or special characters, such as path names that may contain spaces. Use this setting if Xcode does not already provide UI for a particular `iig` flag

<a id="Other-Linker-Flags"></a>

### Other Linker Flags

**Setting name:** `OTHER_LDFLAGS`

Options defined in this setting are passed to invocations of the linker.

<a id="Other-Librarian-Flags"></a>

### Other Librarian Flags

**Setting name:** `OTHER_LIBTOOLFLAGS`

Options defined in this setting are passed to all invocations of the archive librarian, which is used to generate static libraries.

<a id="Other-MiG-Flags"></a>

### Other MiG Flags

**Setting name:** `OTHER_MIGFLAGS`

Space-separated list of additional flags to pass to `mig`. Be sure to backslash-escape any arguments that contain spaces or special characters, such as path names that may contain spaces. Use this setting if Xcode does not already provide UI for a `mig` flag.

<a id="Other-Module-Verifier-Flags"></a>

### Other Module Verifier Flags

**Setting name:** `OTHER_MODULE_VERIFIER_FLAGS`

Additional flags to pass to the modules-verifier tool.

<a id="Other-OSACompile-Flags"></a>

### Other OSACompile Flags

**Setting name:** `OTHER_OSACOMPILEFLAGS`

Space-separated list of additional flags to pass to `osacompile`. Be sure to backslash-escape any arguments that contain spaces or special characters, such as path names that may contain spaces. Use this setting if Xcode does not already provide UI for a particular `osacompile` flag.

<a id="Other-Rez-Flags"></a>

### Other Rez Flags

**Setting name:** `OTHER_REZFLAGS`

Space-separated list of additional flags to pass to the `Rez` compiler. Be sure to backslash-escape any arguments that contain spaces or special characters, such as path names that may contain spaces. Use this setting if Xcode does not already provide UI for a particular `Rez` flag.

<a id="Other-Swift-Flags"></a>

### Other Swift Flags

**Setting name:** `OTHER_SWIFT_FLAGS`

A list of additional flags to pass to the Swift compiler.

<a id="Other-Text-Based-InstallAPI-Flags"></a>

### Other Text-Based InstallAPI Flags

**Setting name:** `OTHER_TAPI_FLAGS`

Options defined in this setting are passed to invocations of the `Text-Based InstallAPI` tool.

<a id="PACKAGETYPE"></a>

### PACKAGE_TYPE

**Setting name:** `PACKAGE_TYPE`

Uniform type identifier. Identifies the type of the product the target builds. Some products may be made up of a single binary or archive. Others may comprise several files, which are grouped under a single directory. These container directories are known as *bundles*.

<a id="Property-List-Output-Encoding"></a>

### Property List Output Encoding

**Setting name:** `PLIST_FILE_OUTPUT_FORMAT`

Specifies the output encoding for property list files (`.plist`). The output encodings can be `binary` or `XML`. By default, the output encoding will be unchanged from the input.

<a id="PLUGINSFOLDERPATH"></a>

### PLUGINS_FOLDER_PATH

**Setting name:** `PLUGINS_FOLDER_PATH`

Specifies the directory that contains the product’s plugins.

<a id="Precompiled-Header-Uses-Files-From-Build-Directory"></a>

### Precompiled Header Uses Files From Build Directory

**Setting name:** `PRECOMPS_INCLUDE_HEADERS_FROM_BUILT_PRODUCTS_DIR`

This setting allows for better control of sharing precompiled prefix header files between projects. By default, Xcode assumes that the prefix header file may include header files from the build directory if the build directory is outside of the project directory. Xcode cannot determine this ahead of time since other projects may not have been built into the shared build directory at the time the information is needed.

If your prefix file never includes files from the build directory you may set this to `NO` to improve sharing of precompiled headers. If the prefix does use files from a build directory that is inside your project directory, you may set this to `YES` to avoid unintended sharing that may result in build failures.

<a id="Single-Object-Prelink-Flags"></a>

### Single-Object Prelink Flags

**Setting name:** `PRELINK_FLAGS`

Additional flags to pass when performing a single-object prelink.

<a id="Prelink-libraries"></a>

### Prelink libraries

**Setting name:** `PRELINK_LIBS`

Additional libraries to pass when performing a single-object prelink.

<a id="Private-Headers-Folder-Path"></a>

### Private Headers Folder Path

**Setting name:** `PRIVATE_HEADERS_FOLDER_PATH`

The location to copy the private headers to during building, relative to the built products folder.

<a id="PROCESSEDINFOPLISTPATH"></a>

### PROCESSED_INFOPLIST_PATH

**Setting name:** `PROCESSED_INFOPLIST_PATH`

Path of the per-architecture, per-variant intermediate Info.plist after C preprocessing and/or variable expansion have been applied.

<a id="Product-Bundle-Identifier"></a>

### Product Bundle Identifier

**Setting name:** `PRODUCT_BUNDLE_IDENTIFIER`

A string that uniquely identifies the bundle. The string should be in reverse DNS format using only alphanumeric characters (`A-Z`, `a-z`, `0-9`), the dot (`.`), and the hyphen (`-`).

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [CFBundleIdentifier](https://developer.apple.com/documentation/bundleresources/information-property-list/cfbundleidentifier) key in the `Info.plist` file to the value of this build setting.

<a id="PRODUCTDEFINITIONPLIST"></a>

### PRODUCT_DEFINITION_PLIST

**Setting name:** `PRODUCT_DEFINITION_PLIST`

Path to a file specifying additional requirements for a product archive.

<a id="Product-Module-Name"></a>

### Product Module Name

**Setting name:** `PRODUCT_MODULE_NAME`

The name to use for the source code module constructed for this target, and which will be used to import the module in implementation source files. Must be a valid identifier.

<a id="Product-Name"></a>

### Product Name

**Setting name:** `PRODUCT_NAME`

This is the basename of the product generated by the target.

When `GENERATE_INFOPLIST_FILE` is enabled, sets the value of the [CFBundleName](https://developer.apple.com/documentation/bundleresources/information-property-list/cfbundlename) key in the `Info.plist` file to the value of this build setting.

<a id="Project-Name"></a>

### Project Name

**Setting name:** `PROJECT_NAME`

The name of the current project.

<a id="PROJECTTEMPDIR"></a>

### PROJECT_TEMP_DIR

**Setting name:** `PROJECT_TEMP_DIR`

Identifies the directory in which the project’s intermediate build files are placed. This directory is shared between all the targets defined by the project. Run Script build phases should generate intermediate build files in the directory identified by `DERIVED_FILE_DIR`, not the location this build setting specifies.

<a id="Provisioning-Profile"></a>

### Provisioning Profile

**Setting name:** `PROVISIONING_PROFILE_SPECIFIER`

Must contain a profile name (or UUID). A missing or invalid profile will cause a build error. Use in conjunction with \[DEVELOPMENT_TEAM\] to fully specify provisioning profile.

<a id="Public-Headers-Folder-Path"></a>

### Public Headers Folder Path

**Setting name:** `PUBLIC_HEADERS_FOLDER_PATH`

The location to copy the public headers to during building, relative to the built products folder.

<a id="Re-Exported-Framework-Names"></a>

### Re-Exported Framework Names

**Setting name:** `REEXPORTED_FRAMEWORK_NAMES`

List of framework names that should have their symbols be reexported from the built library.

<a id="Re-Exported-Library-Names"></a>

### Re-Exported Library Names

**Setting name:** `REEXPORTED_LIBRARY_NAMES`

List of library names that should have their symbols be reexported from the built library.

<a id="Re-Exported-Library-Paths"></a>

### Re-Exported Library Paths

**Setting name:** `REEXPORTED_LIBRARY_PATHS`

List of library paths that should have their symbols be reexported from the built library.

<a id="Strip-USDZ-files-from-Reference-Object"></a>

### Strip USDZ file(s) from Reference Object

**Setting name:** `REFERENCEOBJECT_STRIP_USDZ`

Strip any embedded USDZ files when compiling a Reference Object file.

<a id="Register-App-Groups"></a>

### Register App Groups

**Setting name:** `REGISTER_APP_GROUPS`

Register app groups in profiles.

<a id="REMOVECVSFROMRESOURCES"></a>

### REMOVE_CVS_FROM_RESOURCES

**Setting name:** `REMOVE_CVS_FROM_RESOURCES`

Specifies whether to remove `CVS` directories from bundle resources when they are copied.

<a id="REMOVEGITFROMRESOURCES"></a>

### REMOVE_GIT_FROM_RESOURCES

**Setting name:** `REMOVE_GIT_FROM_RESOURCES`

Specifies whether to remove `.git` directories from bundle resources when they are copied.

<a id="REMOVEHGFROMRESOURCES"></a>

### REMOVE_HG_FROM_RESOURCES

**Setting name:** `REMOVE_HG_FROM_RESOURCES`

Specifies whether to remove `.hg` directories from bundle resources when they are copied.

<a id="REMOVESVNFROMRESOURCES"></a>

### REMOVE_SVN_FROM_RESOURCES

**Setting name:** `REMOVE_SVN_FROM_RESOURCES`

Specifies whether to remove `SVN` directories from bundle resources when they are copied.

<a id="File-Fork-of-Binary-Sources"></a>

### File Fork of Binary Sources

**Setting name:** `RESMERGER_SOURCES_FORK`

Determines whether `ResMerger` treats binary input files as data-fork hosted or resource-fork hosted, or whether it automatically examines each input file.

<a id="Resources-Targeted-Device-Family"></a>

### Resources Targeted Device Family

**Setting name:** `RESOURCES_TARGETED_DEVICE_FAMILY`

Overrides `TARGETED_DEVICE_FAMILY` when the resource copying needs to differ from the default targeted device.

<a id="RETAINRAWBINARIES"></a>

### RETAIN_RAW_BINARIES

**Setting name:** `RETAIN_RAW_BINARIES`

Specifies whether to keep copies of unstripped binaries available.

<a id="REZCOLLECTORDIR"></a>

### REZ_COLLECTOR_DIR

**Setting name:** `REZ_COLLECTOR_DIR`

Specifies the directory in which the collected Resource Manager resources generated by `ResMerger` are stored before they are added to the product.

<a id="REZOBJECTSDIR"></a>

### REZ_OBJECTS_DIR

**Setting name:** `REZ_OBJECTS_DIR`

Specifies the directory in which compiled Resource Manager resources generated by `Rez` are stored before they are collected using `ResMerger`.

<a id="Rez-Prefix-File"></a>

### Rez Prefix File

**Setting name:** `REZ_PREFIX_FILE`

Implicitly include the named file on the command line for each `Rez` file compiled. The path given should either be a project relative path or an absolute path.

<a id="Preprocessor-Defines"></a>

### Preprocessor Defines

**Setting name:** `REZ_PREPROCESSOR_DEFINITIONS`

These strings will be defined when compiling resource manager resources.

<a id="Preprocessor-Undefines"></a>

### Preprocessor Undefines

**Setting name:** `REZ_PREPROCESSOR_UNDEFINITIONS`

These strings will be undefined when compiling resource manager resources.

<a id="Resolve-Aliases"></a>

### Resolve Aliases

**Setting name:** `REZ_RESOLVE_ALIASES`

Enables aliases to be unresolved or conditionally resolved. The default is to resolve aliases always.

<a id="Read-only-Resource-Map"></a>

### Read-only Resource Map

**Setting name:** `REZ_RESOURCE_MAP_READ_ONLY`

Enabling this option causes the resource map output to be read-only.

<a id="Rez-Script-Type"></a>

### Rez Script Type

**Setting name:** `REZ_SCRIPT_TYPE`

Enables the recognition of a specific 2-byte character script identifier to use when compiling resource manager resources. This allows for 2-byte characters in strings to be handled as indivisible entities. The default language is Roman, which specifies 1-byte character sets.

<a id="Rez-Search-Paths"></a>

### Rez Search Paths

**Setting name:** `REZ_SEARCH_PATHS`

This is a list of paths to search for files with resource manager resources. Paths are delimited by whitespace, so any paths with spaces in them need to be properly quoted.

<a id="Show-Diagnostic-Output"></a>

### Show Diagnostic Output

**Setting name:** `REZ_SHOW_DEBUG_OUTPUT`

Enabling this option causes version and progress information to be written when compiling resource manager resources.

<a id="Suppress-Type-Redeclaration-Warnings"></a>

### Suppress Type Redeclaration Warnings

**Setting name:** `REZ_SUPPRESS_REDECLARED_RESOURCE_TYPE_WARNINGS`

Enabling this option causes warnings about redeclared resource types to be suppressed.

<a id="Allow-DYLD-Environment-Variables"></a>

### Allow DYLD Environment Variables

**Setting name:** `RUNTIME_EXCEPTION_ALLOW_DYLD_ENVIRONMENT_VARIABLES`

A Boolean value that indicates whether the app may be affected by dynamic linker environment variables, which you can use to inject code into your app’s process.

<a id="Allow-JIT"></a>

### Allow JIT

**Setting name:** `RUNTIME_EXCEPTION_ALLOW_JIT`

A Boolean value that indicates whether the app may create writable and executable memory using the MAP_JIT flag.

<a id="Allow-Unsigned-Executable-Memory"></a>

### Allow Unsigned Executable Memory

**Setting name:** `RUNTIME_EXCEPTION_ALLOW_UNSIGNED_EXECUTABLE_MEMORY`

A Boolean value that indicates whether the app may create writable and executable memory without the restrictions imposed by using the MAP_JIT flag.

<a id="Debugging-Tool"></a>

### Debugging Tool

**Setting name:** `RUNTIME_EXCEPTION_DEBUGGING_TOOL`

A Boolean value that indicates whether the app is a debugger and may attach to other processes or get task ports.

<a id="Disable-Executable-Page-Protection"></a>

### Disable Executable Page Protection

**Setting name:** `RUNTIME_EXCEPTION_DISABLE_EXECUTABLE_PAGE_PROTECTION`

A Boolean value that indicates whether to disable all code signing protections while launching an app, and during its execution.

<a id="Disable-Library-Validation"></a>

### Disable Library Validation

**Setting name:** `RUNTIME_EXCEPTION_DISABLE_LIBRARY_VALIDATION`

A Boolean value that indicates whether the app loads arbitrary plug-ins or frameworks, without requiring code signing.

<a id="Analyze-During-Build"></a>

### Analyze During ‘Build’

**Setting name:** `RUN_CLANG_STATIC_ANALYZER`

Activating this setting will cause Xcode to run the `Clang` static analysis tool on qualifying source files during every build.

<a id="Build-Documentation-During-Build"></a>

### Build Documentation During ‘Build’

**Setting name:** `RUN_DOCUMENTATION_COMPILER`

Also build documentation as part of the ‘Build’ action.

<a id="Scan-All-Source-Files-for-Includes"></a>

### Scan All Source Files for Includes

**Setting name:** `SCAN_ALL_SOURCE_FILES_FOR_INCLUDES`

Activating this setting will cause all source files to be scanned for includes (for example, of header files) when computing the dependency graph, in which case if an included file is changed then the including file will be rebuilt next time a target containing it is built. Normally only certain types of files, such as C-language source files, are scanned.

This setting is useful if your project contains files of unusual types, which are compiled using a custom build rule.

<a id="SCRIPTSFOLDERPATH"></a>

### SCRIPTS_FOLDER_PATH

**Setting name:** `SCRIPTS_FOLDER_PATH`

Specifies the directory that contains the product’s scripts.

<a id="Base-SDK"></a>

### Base SDK

**Setting name:** `SDKROOT`

The name or path of the base SDK being used during the build. The product will be built against the headers and libraries located inside the indicated SDK. This path will be prepended to all search paths, and will be passed through the environment to the compiler and linker. Additional SDKs can be specified in the `ADDITIONAL_SDKS` setting.

<a id="Symbol-Ordering-Flags"></a>

### Symbol Ordering Flags

**Setting name:** `SECTORDER_FLAGS`

These flags are typically used to specify options for ordering symbols within segments, for example the `-sectorder` option to `ld`.

Generally you should not specify symbol ordering options in Debug or Development configurations, as this will make the linked binary less readable to the debugger. Use them only in Release or Deployment configurations.

<a id="Separately-Edit-Symbols"></a>

### Separately Edit Symbols

**Setting name:** `SEPARATE_SYMBOL_EDIT`

Activating this setting when the linked product’s symbols are to be edited will cause editing to occur via a separate invocation of `nmedit(1)`. Otherwise editing will occur during linking, if possible.

<a id="SHAREDFRAMEWORKSFOLDERPATH"></a>

### SHARED_FRAMEWORKS_FOLDER_PATH

**Setting name:** `SHARED_FRAMEWORKS_FOLDER_PATH`

Specifies the directory that contains the product’s shared frameworks.

<a id="Precompiled-Headers-Cache-Path"></a>

### Precompiled Headers Cache Path

**Setting name:** `SHARED_PRECOMPS_DIR`

The path where precompiled prefix header files are placed during a build. Defaults to `$(OBJROOT)/SharedPrecompiledHeaders`. Using a common location allows precompiled headers to be shared between multiple projects.

<a id="Skip-Install"></a>

### Skip Install

**Setting name:** `SKIP_INSTALL`

If enabled, don’t install built products even if deployment locations are active.

<a id="Skip-Mergeable-Library-Bundle-Hook"></a>

### Skip Mergeable Library Bundle Hook

**Setting name:** `SKIP_MERGEABLE_LIBRARY_BUNDLE_HOOK`

For mergeable libraries, skips adding a hook into the library’s resource bundle. This will prevent `Bundle(for:)` from returning this library’s resource bundle.

For more information on mergeable libraries, see [Configuring your project to use mergeable libraries](https://developer.apple.com/documentation/xcode/configuring-your-project-to-use-mergeable-libraries).

<a id="SRCROOT"></a>

### SRCROOT

**Setting name:** `SRCROOT`

Identifies the directory containing the target’s source files.

<a id="STRINGSDATADIR"></a>

### STRINGSDATA_DIR

**Setting name:** `STRINGSDATA_DIR`

The location to write .stringsdata files to when SWIFT_EMIT_LOC_STRINGS is enabled.

<a id="STRINGSDATAROOT"></a>

### STRINGSDATA_ROOT

**Setting name:** `STRINGSDATA_ROOT`

The location to traverse and collect .stringsdata files from when exporting for localization.

<a id="Adjust-Strings-File-Names-for-Infoplist"></a>

### Adjust Strings File Names for Info.plist

**Setting name:** `STRINGS_FILE_INFOPLIST_RENAME`

If enabled, renames .strings files whose basename matches that of the target’s Info.plist file, to InfoPlist.strings in the built product.

<a id="Strings-File-Output-Encoding"></a>

### Strings File Output Encoding

**Setting name:** `STRINGS_FILE_OUTPUT_ENCODING`

Specify the output encoding to be used for Strings files - the default is UTF-16. The value can be either an `NSStringEncoding`, such as one of the numeric values recognized by `NSString`, or an IANA character set name as understood by `CFString`. It is recommended that the source file be in UTF-8 encoding, which is the default encoding for standard strings files, and Xcode will automatically process it to the output encoding. Processing will fail if the file cannot be converted to the specified encoding.

<a id="Generate-String-Catalog-Symbols"></a>

### Generate String Catalog Symbols

**Setting name:** `STRING_CATALOG_GENERATE_SYMBOLS`

When enabled, symbols will be generated for manually-managed strings in String Catalogs.

<a id="Additional-Strip-Flags"></a>

### Additional Strip Flags

**Setting name:** `STRIPFLAGS`

Additional flags to be passed when stripping the linked product of the build.

<a id="Strip-Linked-Product"></a>

### Strip Linked Product

**Setting name:** `STRIP_INSTALLED_PRODUCT`

If enabled,  the linked product of the build will be stripped of symbols when performing deployment postprocessing.

<a id="Remove-Text-Metadata-From-PNG-Files"></a>

### Remove Text Metadata From PNG Files

**Setting name:** `STRIP_PNG_TEXT`

Metadata in the form of text chunks in PNG files will be removed to reduce their footprint on disk.

<a id="Strip-Style"></a>

### Strip Style

**Setting name:** `STRIP_STYLE`

The level of symbol stripping to be performed on the linked product of the build. The default value is defined by the target’s product type.

- *All Symbols:* Completely strips the binary, removing the symbol table and relocation information. \[all, -s\]
- *Non-Global Symbols:* Strips non-global symbols, but saves external symbols. \[non-global, -x\]
- *Debugging Symbols:* Strips debugging symbols, but saves local and global symbols. \[debugging, -S\]

<a id="Strip-Swift-Symbols"></a>

### Strip Swift Symbols

**Setting name:** `STRIP_SWIFT_SYMBOLS`

Adjust the level of symbol stripping specified by the STRIP_STYLE setting so that when the linked product of the build is stripped, all Swift symbols will be removed.

<a id="Supported-Platforms"></a>

### Supported Platforms

**Setting name:** `SUPPORTED_PLATFORMS`

The list of supported platforms from which a base SDK can be used. This setting is used if the product can be built for multiple platforms using different SDKs.

<a id="Supports-Mac-Catalyst"></a>

### Supports Mac Catalyst

**Setting name:** `SUPPORTS_MACCATALYST`

Support building this target for Mac Catalyst.

<a id="Show-Mac-Designed-for-iPhone--iPad-Destination"></a>

### Show Mac (Designed for iPhone & iPad) Destination

**Setting name:** `SUPPORTS_MAC_DESIGNED_FOR_IPHONE_IPAD`

Show the Mac (Designed for iPhone) and Mac (Designed for iPad) destinations.

<a id="Supports-Text-Based-InstallAPI"></a>

### Supports Text-Based InstallAPI

**Setting name:** `SUPPORTS_TEXT_BASED_API`

Enable to indicate that the target supports `Text-Based InstallAPI`, which will enable its generation during `install` builds.

<a id="Show-Apple-Vision-Designed-for-iPhone--iPad-Destination"></a>

### Show Apple Vision (Designed for iPhone & iPad) Destination

**Setting name:** `SUPPORTS_XR_DESIGNED_FOR_IPHONE_IPAD`

Show the Apple Vision (Designed for iPhone) and Apple Vision (Designed for iPad) destinations.

<a id="Active-Compilation-Conditions"></a>

### Active Compilation Conditions

**Setting name:** `SWIFT_ACTIVE_COMPILATION_CONDITIONS`

A list of compilation conditions to enable for conditional compilation expressions.

<a id="Approachable-Concurrency"></a>

### Approachable Concurrency

**Setting name:** `SWIFT_APPROACHABLE_CONCURRENCY`

Enables upcoming features that aim to provide a more approachable path to Swift Concurrency: DisableOutwardActorInference, GlobalActorIsolatedTypesUsability, InferIsolatedConformances, InferSendableFromCaptures, and NonisolatedNonsendingByDefault.

<a id="Bridging-Header-is-Internal-to-the-Module"></a>

### Bridging Header is Internal to the Module

**Setting name:** `SWIFT_BRIDGING_HEADER_IS_INTERNAL`

When there is a bridging header, this setting indicates whether the contents of that bridging header should be imported as-if they came from an internal import. This is necessary when using bridging headers with Swift modules that are imported into other modules.

<a id="Compilation-Mode"></a>

### Compilation Mode

**Setting name:** `SWIFT_COMPILATION_MODE`

This setting controls the way the Swift files in a module are rebuilt.

- *Incremental*: Only rebuild the Swift source files in the module that are out of date, running multiple compiler processes as needed.
- *Whole Module*: Always rebuild all Swift source files in the module, in a single compiler process.

<a id="Default-Actor-Isolation"></a>

### Default Actor Isolation

**Setting name:** `SWIFT_DEFAULT_ACTOR_ISOLATION`

Controls default actor isolation for unannotated code. When set to ‘MainActor’, `@MainActor` isolation will be inferred by default to mitigate false-positive data-race safety errors in sequential code.

<a id="Disable-Safety-Checks"></a>

### Disable Safety Checks

**Setting name:** `SWIFT_DISABLE_SAFETY_CHECKS`

Disable runtime safety checks when optimizing.

<a id="Const-value-emission-protocol-list"></a>

### Const value emission protocol list

**Setting name:** `SWIFT_EMIT_CONST_VALUE_PROTOCOLS`

A list of protocol names whose conformances the Swift compiler is to emit compile-time-known values for.

<a id="Use-Compiler-to-Extract-Swift-Strings"></a>

### Use Compiler to Extract Swift Strings

**Setting name:** `SWIFT_EMIT_LOC_STRINGS`

When enabled, the Swift compiler will be used to extract Swift string literal and interpolation `LocalizedStringKey` and `LocalizationKey` types during localization export.

<a id="Bare-Slash-Regex-Literals"></a>

### Bare Slash Regex Literals

**Setting name:** `SWIFT_ENABLE_BARE_SLASH_REGEX`

Enables the use of the forward slash syntax for regular-expressions (`/.../`). This is always enabled when in the Swift 6 language mode.

<a id="Emit-Swift-const-values"></a>

### Emit Swift const values

**Setting name:** `SWIFT_ENABLE_EMIT_CONST_VALUES`

Emit the extracted compile-time known values from the Swift compiler (-emit-const-values)

<a id="Explicitly-Built-Modules"></a>

### Explicitly Built Modules

**Setting name:** `SWIFT_ENABLE_EXPLICIT_MODULES`

Coordinates the build of the main module’s modular dependencies via explicit tasks scheduled by the build system.

<a id="Exclusive-Access-to-Memory"></a>

### Exclusive Access to Memory

**Setting name:** `SWIFT_ENFORCE_EXCLUSIVE_ACCESS`

Enforce exclusive access at run-time.

<a id="Module-Import-Paths"></a>

### Module Import Paths

**Setting name:** `SWIFT_INCLUDE_PATHS`

A list of paths to be searched by the Swift compiler for additional Swift modules.

<a id="Install-Swift-Module"></a>

### Install Swift Module

**Setting name:** `SWIFT_INSTALL_MODULE`

For frameworks, install the Swift module so it can be accessed from Swift code using the framework.

<a id="Install-Generated-Header"></a>

### Install Generated Header

**Setting name:** `SWIFT_INSTALL_OBJC_HEADER`

For frameworks, install the C++/Objective-C generated header describing bridged Swift types into the `PUBLIC_HEADERS_FOLDER_PATH` so they may be accessed from Objective-C or C++ code using the framework. Defaults to `YES`.

<a id="Link-Frameworks-and-Libraries-Automatically"></a>

### Link Frameworks and Libraries Automatically

**Setting name:** `SWIFT_MODULES_AUTOLINK`

Automatically link frameworks and libraries that are referenced using `import`.

<a id="Bridging-Header"></a>

### Bridging Header

**Setting name:** `SWIFT_OBJC_BRIDGING_HEADER`

Path to the header defining the C interfaces to be exposed in Swift.

<a id="Generated-Header-Name"></a>

### Generated Header Name

**Setting name:** `SWIFT_OBJC_INTERFACE_HEADER_NAME`

Name to use for the header that is generated by the Swift compiler for use in `#import` statements in Objective-C or C++.

<a id="C++-and-Objective-C-Interoperability"></a>

### C++ and Objective-C Interoperability

**Setting name:** `SWIFT_OBJC_INTEROP_MODE`

Determines whether Swift can interoperate with C++ in addition to Objective-C.

<a id="Optimization-Level"></a>

### Optimization Level

**Setting name:** `SWIFT_OPTIMIZATION_LEVEL`

- *None:* Compile without any optimization. \[-Onone\]
- *Optimize for Speed:* \[-O\]
- *Optimize for Size:* \[-Osize\]
- *Whole Module Optimization:* \[-O -whole-module-optimization\]

<a id="Package-Access-Identifier"></a>

### Package Access Identifier

**Setting name:** `SWIFT_PACKAGE_NAME`

An identifier that allows grouping of modules with access to symbols with a package access modifier.

<a id="Precompile-Bridging-Header"></a>

### Precompile Bridging Header

**Setting name:** `SWIFT_PRECOMPILE_BRIDGING_HEADER`

Generate a precompiled header for the Objective-C bridging header, if used, in order to reduce overall build times.

<a id="Reflection-Metadata-Level"></a>

### Reflection Metadata Level

**Setting name:** `SWIFT_REFLECTION_METADATA_LEVEL`

This setting controls the level of reflection metadata the Swift compiler emits.

- *All:* Type information about stored properties of Swift structs and classes, Swift enum cases, and their names, are emitted into the binary for reflection and analysis in the Memory Graph Debugger.
- *Without Names:*  Only type information about stored properties and cases are emitted into the binary, with their names omitted. \[-disable-reflection-names\]
- *None:* No reflection metadata is emitted into the binary. Accuracy of detecting memory issues involving Swift types in the Memory Graph Debugger will be degraded and reflection in Swift code may not be able to discover children of types, such as properties and enum cases. \[-disable-reflection-metadata\]

<a id="Skip-Automatically-Linking-All-Frameworks"></a>

### Skip Automatically Linking All Frameworks

**Setting name:** `SWIFT_SKIP_AUTOLINKING_ALL_FRAMEWORKS`

When enabled, does not automatically link any frameworks which are referenced using `import`.

<a id="Skip-Automatically-Linking-Frameworks"></a>

### Skip Automatically Linking Frameworks

**Setting name:** `SWIFT_SKIP_AUTOLINKING_FRAMEWORKS`

A list of framework names which should not be automatically linked when referenced using `import`.

<a id="Skip-Automatically-Linking-Libraries"></a>

### Skip Automatically Linking Libraries

**Setting name:** `SWIFT_SKIP_AUTOLINKING_LIBRARIES`

A list of library names which should not be automatically linked when referenced using `import`.

<a id="Strict-Concurrency-Checking"></a>

### Strict Concurrency Checking

**Setting name:** `SWIFT_STRICT_CONCURRENCY`

Enables strict concurrency checking to produce warnings for possible data races. This is always ‘complete’ when in the Swift 6 language mode and produces errors instead of warnings.

<a id="Strict-Memory-Safety"></a>

### Strict Memory Safety

**Setting name:** `SWIFT_STRICT_MEMORY_SAFETY`

Enable strict memory safety checking. This will produce warnings for each use of an unsafe language construct or API that isn’t acknowledged with `unsafe` or `@unsafe`.

<a id="Suppress-Warnings"></a>

### Suppress Warnings

**Setting name:** `SWIFT_SUPPRESS_WARNINGS`

Don’t emit any warnings.

<a id="System-Module-Import-Paths"></a>

### System Module Import Paths

**Setting name:** `SWIFT_SYSTEM_INCLUDE_PATHS`

A list of paths to be searched by the Swift compiler for additional system Swift modules. Warnings found in system modules will not be emitted.

<a id="Treat-Warnings-as-Errors"></a>

### Treat Warnings as Errors

**Setting name:** `SWIFT_TREAT_WARNINGS_AS_ERRORS`

Treat all warnings as errors.

<a id="Concise-Magic-File"></a>

### Concise Magic File

**Setting name:** `SWIFT_UPCOMING_FEATURE_CONCISE_MAGIC_FILE`

Changes #file to evaluate to a string literal of the format `<module-name>/<file-name>`, with the existing behavior preserved in a new #filePath. This is always enabled when in the Swift 6 language mode.

<a id="Deprecate-Application-Main"></a>

### Deprecate Application Main

**Setting name:** `SWIFT_UPCOMING_FEATURE_DEPRECATE_APPLICATION_MAIN`

Causes any use of `@UIApplicationMain` or `@NSApplicationMain` to produce a warning (use `@main` instead). This is always enabled when in the Swift 6 language mode and an error instead of a warning.

<a id="Disable-Outward-Actor-Isolation-Inference"></a>

### Disable Outward Actor Isolation Inference

**Setting name:** `SWIFT_UPCOMING_FEATURE_DISABLE_OUTWARD_ACTOR_ISOLATION`

Removes inferred actor isolation inference from property wrappers. This is always enabled when in the Swift 6 language mode.

<a id="Dynamic-Actor-Isolation"></a>

### Dynamic Actor Isolation

**Setting name:** `SWIFT_UPCOMING_FEATURE_DYNAMIC_ACTOR_ISOLATION`

Enable actor isolation checking at runtime for synchronous isolated functions. This is always enabled when in the Swift 6 language mode.

<a id="Require-Existential-any"></a>

### Require Existential any

**Setting name:** `SWIFT_UPCOMING_FEATURE_EXISTENTIAL_ANY`

Changes existential types to require explicit annotation with the `any` keyword.

<a id="Forward-Trailing-Closures"></a>

### Forward Trailing Closures

**Setting name:** `SWIFT_UPCOMING_FEATURE_FORWARD_TRAILING_CLOSURES`

Updates trailing closures to be evaluated such that arguments are matched forwards instead of backwards. This is always enabled when in the Swift 6 language mode.

<a id="Global-Actor-Isolated-Types-Usability"></a>

### Global-Actor-Isolated Types Usability

**Setting name:** `SWIFT_UPCOMING_FEATURE_GLOBAL_ACTOR_ISOLATED_TYPES_USABILITY`

Enable new concurrency checking rules for global-actor-isolated types. This is always enabled when in the Swift 6 language mode.

<a id="Isolated-Global-Variables"></a>

### Isolated Global Variables

**Setting name:** `SWIFT_UPCOMING_FEATURE_GLOBAL_CONCURRENCY`

Adds a warning for global variables that are neither isolated to a global actor or are not both immutable and Sendable. This is always enabled when in the Swift 6 language mode and an error instead of a warning.

<a id="Implicitly-Opened-Existentials"></a>

### Implicitly Opened Existentials

**Setting name:** `SWIFT_UPCOMING_FEATURE_IMPLICIT_OPEN_EXISTENTIALS`

Enables passing an existential where a generic is expected. This is always enabled when in the Swift 6 language mode.

<a id="Import-Objective-C-Forward-Declarations"></a>

### Import Objective-C Forward Declarations

**Setting name:** `SWIFT_UPCOMING_FEATURE_IMPORT_OBJC_FORWARD_DECLS`

Synthesizes placeholder types to represent forward declared Objective-C interfaces and protocols. This is always enabled when in the Swift 6 language mode.

<a id="Infer-Isolated-Conformances"></a>

### Infer Isolated Conformances

**Setting name:** `SWIFT_UPCOMING_FEATURE_INFER_ISOLATED_CONFORMANCES`

Infer conformances of global-actor isolated types as isolated to the same actor unless isolation is explicitly specified as `nonisolated`.

<a id="Infer-Sendable-for-Methods-and-Key-Path-Literals"></a>

### Infer Sendable for Methods and Key Path Literals

**Setting name:** `SWIFT_UPCOMING_FEATURE_INFER_SENDABLE_FROM_CAPTURES`

Adds sendability inference for partial and unapplied methods, and allows specifying whether a key path literal is Sendable. This is always enabled when in the Swift 6 language mode.

<a id="Default-Internal-Imports"></a>

### Default Internal Imports

**Setting name:** `SWIFT_UPCOMING_FEATURE_INTERNAL_IMPORTS_BY_DEFAULT`

Switches the default accessibility of module imports to `internal` rather than `public`.

<a id="Isolated-Default-Values"></a>

### Isolated Default Values

**Setting name:** `SWIFT_UPCOMING_FEATURE_ISOLATED_DEFAULT_VALUES`

Adds actor isolation for default values, matching its enclosing function or stored property. This is always enabled when in the Swift 6 language mode.

<a id="Member-Import-Visibility"></a>

### Member Import Visibility

**Setting name:** `SWIFT_UPCOMING_FEATURE_MEMBER_IMPORT_VISIBILITY`

Requires that a module be imported directly in order for its member declarations to be accessible.

<a id="Nonfrozen-Enum-Exhaustivity"></a>

### Nonfrozen Enum Exhaustivity

**Setting name:** `SWIFT_UPCOMING_FEATURE_NONFROZEN_ENUM_EXHAUSTIVITY`

Enable errors when switching over nonfrozen enums without an `@unknown default` case. This is always enabled when in the Swift 6 language mode.

<a id="nonisolatednonsending-By-Default"></a>

### nonisolated(nonsending) By Default

**Setting name:** `SWIFT_UPCOMING_FEATURE_NONISOLATED_NONSENDING_BY_DEFAULT`

Runs nonisolated async functions on the caller’s actor by default unless the function is explicitly marked `@concurrent`.

<a id="Region-Based-Isolation"></a>

### Region Based Isolation

**Setting name:** `SWIFT_UPCOMING_FEATURE_REGION_BASED_ISOLATION`

Enable passing non-Sendable values over isolation boundaries when there’s no possibility of concurrent access. This is always enabled when in the Swift 6 language mode.

<a id="Swift-Language-Version"></a>

### Swift Language Version

**Setting name:** `SWIFT_VERSION`

The language version used to compile the target’s Swift code.

<a id="Diagnostic-Groups-Treated-as-Errors"></a>

### Diagnostic Groups Treated as Errors

**Setting name:** `SWIFT_WARNINGS_AS_ERRORS_GROUPS`

Specify diagnostic groups that should be treated as errors (format: ‘’)

<a id="Diagnostic-Groups-Remain-Warnings"></a>

### Diagnostic Groups Remain Warnings

**Setting name:** `SWIFT_WARNINGS_AS_WARNINGS_GROUPS`

Specify diagnostic groups that should remain warnings (format: ‘’)

<a id="Module-name"></a>

### Module name

**Setting name:** `SYMBOL_GRAPH_EXTRACTOR_MODULE_NAME`

The name of the main module to extract.

<a id="Output-directory"></a>

### Output directory

**Setting name:** `SYMBOL_GRAPH_EXTRACTOR_OUTPUT_DIR`

The symbol graph JSON output directory.

<a id="Build-Products-Path"></a>

### Build Products Path

**Setting name:** `SYMROOT`

The path at which all products will be placed when performing a build. Typically this path is not set per target, but is set per-project or per-user. By default, this is set to `$(PROJECT_DIR)/build`.

<a id="System-Framework-Search-Paths"></a>

### System Framework Search Paths

**Setting name:** `SYSTEM_FRAMEWORK_SEARCH_PATHS`

This is a list of paths to folders containing system frameworks to be searched by the compiler for both included or imported header files when compiling C, Objective-C, C++, or Objective-C++, and by the linker for frameworks used by the product. The order is from highest to lowest precedence. Paths are delimited by whitespace, so any paths with spaces in them need to be properly quoted. This setting is very similar to “Framework Search Paths”, except that the search paths are passed to the compiler in a way that suppresses most warnings for headers found in system search paths. If the compiler doesn’t support the concept of system framework search paths, then the search paths are appended to any existing framework search paths defined in “Framework Search Paths”.

<a id="System-Header-Search-Paths"></a>

### System Header Search Paths

**Setting name:** `SYSTEM_HEADER_SEARCH_PATHS`

This is a list of paths to folders to be searched by the compiler for included or imported system header files when compiling C, Objective-C, C++, or Objective-C++. The order is from highest to lowest precedence. Paths are delimited by whitespace, so any paths with spaces in them need to be properly quoted. This setting is very similar to “Header Search Paths”, except that headers are passed to the compiler in a way that suppresses most warnings for headers found in system search paths. If the compiler doesn’t support the concept of system header search paths, then the search paths are appended to any existing header search paths defined in “Header Search Paths”.

<a id="Text-Based-InstallAPI-Demangle-Symbols"></a>

### Text-Based InstallAPI Demangle Symbols

**Setting name:** `TAPI_DEMANGLE`

Display demangled symbols when building `Text-Based InstallAPI`.

<a id="Enable-Text-Based-InstallAPI-for-Project-Headers"></a>

### Enable Text-Based InstallAPI for Project Headers

**Setting name:** `TAPI_ENABLE_PROJECT_HEADERS`

Include project-level headers when building `Text-Based InstallAPI`.

<a id="Exclude-Private-Header-Paths"></a>

### Exclude Private Header Paths

**Setting name:** `TAPI_EXCLUDE_PRIVATE_HEADERS`

Remove private-level headers from target when building `Text-Based InstallAPI`.

<a id="Exclude-Project-Header-Paths"></a>

### Exclude Project Header Paths

**Setting name:** `TAPI_EXCLUDE_PROJECT_HEADERS`

Remove project-level headers from target when building `Text-Based InstallAPI`.

<a id="Exclude-Public-Header-Paths"></a>

### Exclude Public Header Paths

**Setting name:** `TAPI_EXCLUDE_PUBLIC_HEADERS`

Remove public-level headers from target when building `Text-Based InstallAPI`.

<a id="Extra-Private-Header-Paths"></a>

### Extra Private Header Paths

**Setting name:** `TAPI_EXTRA_PRIVATE_HEADERS`

Add private-level headers from other targets when building `Text-Based InstallAPI`.

<a id="Extra-Project-Header-Paths"></a>

### Extra Project Header Paths

**Setting name:** `TAPI_EXTRA_PROJECT_HEADERS`

Add project-level headers from other targets when building `Text-Based InstallAPI`.

<a id="Extra-Public-Header-Paths"></a>

### Extra Public Header Paths

**Setting name:** `TAPI_EXTRA_PUBLIC_HEADERS`

Add public-level headers from other targets when building `Text-Based InstallAPI`.

<a id="Text-Based-InstallAPI-Language-Mode"></a>

### Text-Based InstallAPI Language Mode

**Setting name:** `TAPI_LANGUAGE`

Selects the language mode when building `Text-Based InstallAPI`.

<a id="Text-Based-InstallAPI-Language-Dialect"></a>

### Text-Based InstallAPI Language Dialect

**Setting name:** `TAPI_LANGUAGE_STANDARD`

Selects the language dialect when building `Text-Based InstallAPI`.

<a id="Text-Based-InstallAPI-Verification-Mode"></a>

### Text-Based InstallAPI Verification Mode

**Setting name:** `TAPI_VERIFY_MODE`

Selects the level of warnings and errors to report when building `Text-Based InstallAPI`.

<a id="Targeted-Device-Families"></a>

### Targeted Device Families

**Setting name:** `TARGETED_DEVICE_FAMILY`

Comma-separated list of integers corresponding to device families supported by this target.

The build system uses this information to set the correct value for the `UIDeviceFamily` key it adds to the target’s `Info.plist` file. Values inapplicable to the current platform will be removed automatically. This also drives the `--target-device` flag to actool, which determines the idioms selected during catalog compilation.

Possible values include:

- **1**: iPhone, iPod touch
- **2**: iPad, Mac Catalyst using “Scaled to Match iPad” Interface
- **3**: Apple TV
- **4**: Apple Watch
- **6**: Mac Catalyst using “Optimize for Mac” Interface
- **7**: Apple Vision

<a id="TARGETBUILDDIR"></a>

### TARGET_BUILD_DIR

**Setting name:** `TARGET_BUILD_DIR`

Identifies the root of the directory hierarchy that contains the product’s files (no intermediate build files). Run Script build phases that operate on product files of the target that defines them should use the value of this build setting, but Run Script build phases that operate on product files of other targets should use `BUILT_PRODUCTS_DIR` instead.

<a id="Target-Name"></a>

### Target Name

**Setting name:** `TARGET_NAME`

The name of the current target.

<a id="TARGETTEMPDIR"></a>

### TARGET_TEMP_DIR

**Setting name:** `TARGET_TEMP_DIR`

Identifies the directory containing the target’s intermediate build files. Run Script build phases should place intermediate files at the location indicated by `DERIVED_FILE_DIR`, not the directory identified by this build setting.

<a id="Test-Host"></a>

### Test Host

**Setting name:** `TEST_HOST`

Path to the executable into which a bundle of tests is injected. Only specify this setting if testing an application or other executable.

<a id="Treat-missing-baselines-as-test-failures"></a>

### Treat missing baselines as test failures

**Setting name:** `TREAT_MISSING_BASELINES_AS_TEST_FAILURES`

When running tests that measure performance via `XCTestCase`, report missing baselines as test failures.

<a id="Treat-Missing-Script-Phase-Outputs-as-Errors"></a>

### Treat Missing Script Phase Outputs as Errors

**Setting name:** `TREAT_MISSING_SCRIPT_PHASE_OUTPUTS_AS_ERRORS`

Enabling this option causes warnings about incremental build performance issues caused by script phases which are missing outputs, to be treated as errors.

<a id="Unexported-Symbols-File"></a>

### Unexported Symbols File

**Setting name:** `UNEXPORTED_SYMBOLS_FILE`

A project-relative path to a file that lists the symbols not to export. See `ld -exported_symbols_list` for details on exporting symbols.

<a id="UNLOCALIZEDRESOURCESFOLDERPATH"></a>

### UNLOCALIZED_RESOURCES_FOLDER_PATH

**Setting name:** `UNLOCALIZED_RESOURCES_FOLDER_PATH`

Specifies the directory that contains the product’s unlocalized resources.

<a id="User-Header-Search-Paths"></a>

### User Header Search Paths

**Setting name:** `USER_HEADER_SEARCH_PATHS`

This is a list of paths to folders to be searched by the compiler for included or imported user header files (those headers listed in quotes) when compiling C, Objective-C, C++, or Objective-C++. Paths are delimited by whitespace, so any paths with spaces in them need to be properly quoted. See `ALWAYS_SEARCH_USER_PATHS` for more details on how this setting is used. If the compiler doesn’t support the concept of user headers, then the search paths are prepended to the any existing header search paths defined in `HEADER_SEARCH_PATHS`.

<a id="Use-Header-Maps"></a>

### Use Header Maps

**Setting name:** `USE_HEADERMAP`

Enable the use of *Header Maps*, which provide the compiler with a mapping from textual header names to their locations, bypassing the normal compiler header search path mechanisms. This allows source code to include headers from various locations in the file system without needing to update the header search path build settings.

<a id="Validate-Built-Product"></a>

### Validate Built Product

**Setting name:** `VALIDATE_PRODUCT`

If enabled, perform validation checks on the product as part of the build process.

<a id="VERBOSEPBXCP"></a>

### VERBOSE_PBXCP

**Setting name:** `VERBOSE_PBXCP`

Specifies whether the target’s Copy Files build phases generate additional information when copying files.

<a id="Versioning-System"></a>

### Versioning System

**Setting name:** `VERSIONING_SYSTEM`

Selects the process used for version-stamping generated files.

- *None:* Use no versioning system.
- *Apple Generic:* Use the current project version setting. \[apple-generic\]
- *Apple Generic (Hidden Symbols):* Use the current project version setting with hidden-visibility symbols. \[apple-generic-hidden\]

<a id="Versioning-Username"></a>

### Versioning Username

**Setting name:** `VERSION_INFO_BUILDER`

This defines a reference to the user performing a build to be included in the generated Apple Generic Versioning stub. Defaults to the value of the `USER` environment variable.

<a id="Generated-Versioning-Variables"></a>

### Generated Versioning Variables

**Setting name:** `VERSION_INFO_EXPORT_DECL`

This defines a prefix string for the version info symbol declaration in the generated Apple Generic Versioning stub. This can be used, for example, to add an optional `export` keyword to the version symbol declaration. This should rarely be changed.

<a id="Generated-Versioning-Source-Filename"></a>

### Generated Versioning Source Filename

**Setting name:** `VERSION_INFO_FILE`

Used to specify a name for the source file that will be generated by Apple Generic Versioning and compiled into your product. By default, this is set to `$(PRODUCT_NAME)_vers.c`.

<a id="Versioning-Name-Prefix"></a>

### Versioning Name Prefix

**Setting name:** `VERSION_INFO_PREFIX`

Used as a prefix for the name of the version info symbol in the generated versioning source file. If you prefix your exported symbols you will probably want to set this to the same prefix.

<a id="Versioning-Name-Suffix"></a>

### Versioning Name Suffix

**Setting name:** `VERSION_INFO_SUFFIX`

Used as a suffix for the name of the version info symbol in the generated versioning source file. This is rarely used.

<a id="Other-Warning-Flags"></a>

### Other Warning Flags

**Setting name:** `WARNING_CFLAGS`

Space-separated list of additional warning flags to pass to the compiler. Use this setting if Xcode does not already provide UI for a particular compiler warning flag.

<a id="Wrapper-Extension"></a>

### Wrapper Extension

**Setting name:** `WRAPPER_EXTENSION`

The extension used for product wrappers, which has a default value based on the product type.

<a id="WRAPPERNAME"></a>

### WRAPPER_NAME

**Setting name:** `WRAPPER_NAME`

Specifies the filename, including the appropriate extension, of the product bundle.

<a id="WRAPPERSUFFIX"></a>

### WRAPPER_SUFFIX

**Setting name:** `WRAPPER_SUFFIX`

Specifies the suffix of the product bundle name, including the character that separates the extension from the rest of the bundle name.

<a id="Other-Yacc-Flags"></a>

### Other Yacc Flags

**Setting name:** `YACCFLAGS`

Space-separated list of additional flags to pass to `yacc`. Be sure to backslash-escape any arguments that contain spaces or special characters, such as path names that may contain spaces. Use this setting if Xcode does not already provide UI for a `yacc` flag.

<a id="Generated-File-Stem"></a>

### Generated File Stem

**Setting name:** `YACC_GENERATED_FILE_STEM`

The file stem to use for the files generated by `yacc`. The files will be named `<stem>.tab.c` and `<stem>.tab.h` based on the value of this setting. The Standard (`y`) option will cause all `yacc` source files in the same target to produce the same output file, and it is not recommended for targets containing multiple `yacc` source files.

<a id="Generate-Debugging-Directives"></a>

### Generate Debugging Directives

**Setting name:** `YACC_GENERATE_DEBUGGING_DIRECTIVES`

Enabling this option changes the preprocessor directives generated by `yacc` so that debugging statements will be incorporated in the compiled code.

<a id="Insert-line-Directives"></a>

### Insert #line Directives

**Setting name:** `YACC_INSERT_LINE_DIRECTIVES`

Enabling this option causes `yacc` to insert the `#line` directives in the generated code. The `#line` directives let the C compiler relate errors in the generated code to the user’s original code. If this option is disabled, `#line` directives specified by the user in the source file will still be retained.

## See Also

### Build settings

- [Configuring the build settings of a target](configuring-the-build-settings-of-a-target.md): Specify the options you use to compile, link, and produce a product from a target, and identify settings inherited from your project or the system.
- [Adding a build configuration file to your project](adding-a-build-configuration-file-to-your-project.md): Specify your project’s build settings in plain-text files, and supply different settings for debug and release builds.
- [Identifying and addressing framework module issues](identifying-and-addressing-framework-module-issues.md): Detect and fix common problems found in framework modules with the module verifier.
- [Understanding build product layout changes in Xcode](understanding-build-product-layout-changes.md)
