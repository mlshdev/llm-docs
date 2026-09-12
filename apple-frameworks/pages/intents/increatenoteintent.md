> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/increatenoteintent](https://developer.apple.com/documentation/intents/increatenoteintent)

# INCreateNoteIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

A request to create a new note.

> INCreateNoteIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
class INCreateNoteIntent
```

<a id="overview"></a>

## Overview

Siri creates an [INCreateNoteIntent](increatenoteintent.md) object when the user asks to create a new note. (If the user asks to add a task and none of your Intents app extensions declare support for the [INAddTasksIntent](inaddtasksintent.md) class, SiriKit uses this intent as a substitute). The intent object contains the content of the note and possibly additional information, such as the name of the folder in which to create the note.

To handle this intent, the handler object in your Intents extension must adopt the [INCreateNoteIntentHandling](increatenoteintenthandling.md) protocol. Your handler should confirm the request and create an [INCreateNoteIntentResponse](increatenoteintentresponse.md) object with the updated note.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents, Siri Suggestions |
| Always requires unlocked device | No |

<a id="Example-Phrases"></a>

### Example Phrases

Users can ask Siri to create notes in a variety of ways. The table below provides a few sample phrases in different languages. You can use these phrases during testing to trigger your intents. This list is not exhaustive and Siri may recognize many other phrases.

| Locale | Example 1 | Example 2 |
| --- | --- | --- |
| en | Create a note called Vacation saying I love Montreal on `<appName>`. | Make a note in my Puppies folder called St. Bernards. |
| zh_Cn | 创建一个叫做度假的便笺说我爱 蒙特利尔(在 `<appName>` 上) | 在我的名字叫做小狗的文件夹里创建一个 便笺叫做圣伯纳犬 |
| zh_HK | (喺 `<appName>` 入面)新增一個叫做假期嘅備忘錄內容係我愛日本 | 喺我嘅狗仔資料夾入面新增一個叫做聖班納犬嘅備忘錄 |
| zh_TW | 新增一個叫做假期的備忘錄說我愛蒙特婁(在 `<appName>` 上) | 在我的小狗檔案夾裡面新增一個叫做聖伯納犬的備忘錄 |
| yue_CN | (喺 `<appName>` 入面)新增一个叫做假期嘅备忘录内容系我爱日本 | 喺我嘅狗仔资料夹入面新增一个叫做圣班纳犬嘅备忘录 |
| ar | أنشئ ملاحظة تحت عنوان العطلة تقول أنا أحب مونتريال (على `<appName>` ) | أنشئ ملاحظة في مجلد الجراء تحت عنوان برنارد |
| da | opret en note med titlen Ferie hvor der står Jeg elsker Montreal (i `<appName>`) | opret en note i min hundehvalpmappe med titlen St. Bernhards |
| de | Erstelle eine Notiz auf mit Namen Urlaub und Inhalt Ich liebe München | Erstelle eine Notiz (auf `<appName>` in meinem Welpen-Ordner mit Namen Dackel |
| es | Crea una nota llamada Vacaciones que diga me gusta Montreal (en appName\>) | Escribe una nota llamada San Bernardos en mi carpeta Cachorros |
| fi | Luo muistio nimeltä Loma, jossa sanotaan rakastan Pariisia (apissa `<appName>`) | Lisää kansioon nimeltä Pennut muistiinpano Bernhardinkoiria |
| fr | Créer une note nommée Vacances disant J’aime Montréal (sur `<appName>`) | Écris une note nommée Saint-Bernard dans mon dossier Animaux de compagnie |
| he | תצרי פתק שנקרא חופשה שאומר אני אוהב את מונטריאול (ב`<appName>` ) | תעשי פתק בתיקיית גורים שלי שנקרא סנט ברנרד |
| it | Crea una nota chiamata Vacanze dicendo mi piace Montreal (su `<appName>`) | Crea una nota nella mia cartella Cagnolini chiamata San Bernardi |
| ja | (`<appName>` で)休暇というメモを作ってモントリオール大好きと書いて | 子犬フォルダにセントバーナードというメモを作って |
| ko | (`<appName>` 에) 나는 몬트리얼을 사랑해라고 휴가 노트를 만들어 | 강아지 폴더에 세인트 버나드라는 이름의 노트 생성해줘 |
| ms | Cipta satu nota dinamakan Cuti katakan saya suka Montreal (pada `<appName>`) | Catat nota dalam folder Anak anjing saya bertajuk St. Bernards |
| nb | Lag et notat som heter Ferie hvor det står Jeg elsker Montreal (i `<appName>`) | Lag et notat i Valper mappen som heter St. Bernards |
| nl | Maak een notitie genaamd vakantie waarin staat ik hou van Montreal (in `<appName>`) | Maak een notitie in mijn puppies-map genaamd Sint-Bernard |
| pt | Criar uma nota chamada Férias dizendo Eu amo Nova Iorque (no `<appName>`) | Crie uma nota na minha pasta Cachorros chamada Pastor Alemão |
| ru | Создать заметку под названием Каникулы в которой говорится я люблю Монреаль (в `<appName>`) | Сделай заметку Сен-Бернар в моей папке Щенки |
| sv | Skapa en anteckning som heter Semester där det står jag älskar Montreal (i `<appName>`) | Skapa en anteckning i min valpmapp som heter Sankt Bernard |
| th | สร้างโน้ตชื่อว่าพักร้อนเขียนว่าฉันอยากไปพัทยา (บนแอพ `<appName>`) | สร้างโน้ตในโฟลเดอร์สถานที่ท่องเที่ยวเขียนว่าเชียงใหม่ |
| tr | (`<appName>` ’de) Tatil adlı bir not oluştur | Not al Paris’te görülecek yerler |

In the preceding examples, `<appName>` represents the name of the app whose Intents extension handles the request.

## Topics

### Initializing the Intent Object

- [init(title:content:groupName:)](increatenoteintent/init%28title_content_groupname_%29.md): Deprecated. Initializes the intent object with the specified note content.

### Getting the Note Content

- [title](increatenoteintent/title.md): Deprecated. The title text for the note.
- [content](increatenoteintent/content.md): Deprecated. The main content of the note.
- [groupName](increatenoteintent/groupname.md): Deprecated. The group that contains the note.

## Relationships

### Inherits From

- [INIntent](inintent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [INIntentSetImageKeyPath](inintentsetimagekeypath.md)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Note Creation

- [INCreateNoteIntentHandling](increatenoteintenthandling.md): Deprecated. The handler interface for creating notes.
- [INCreateNoteIntentResponse](increatenoteintentresponse.md): Deprecated. Your app’s response to a request to create a note.

# INCreateNoteIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

A request to create a new note.

> INCreateNoteIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@interface INCreateNoteIntent : INIntent
```

<a id="overview"></a>

## Overview

Siri creates an [INCreateNoteIntent](increatenoteintent.md) object when the user asks to create a new note. (If the user asks to add a task and none of your Intents app extensions declare support for the [INAddTasksIntent](inaddtasksintent.md) class, SiriKit uses this intent as a substitute). The intent object contains the content of the note and possibly additional information, such as the name of the folder in which to create the note.

To handle this intent, the handler object in your Intents extension must adopt the [INCreateNoteIntentHandling](increatenoteintenthandling.md) protocol. Your handler should confirm the request and create an [INCreateNoteIntentResponse](increatenoteintentresponse.md) object with the updated note.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents, Siri Suggestions |
| Always requires unlocked device | No |

<a id="Example-Phrases"></a>

### Example Phrases

Users can ask Siri to create notes in a variety of ways. The table below provides a few sample phrases in different languages. You can use these phrases during testing to trigger your intents. This list is not exhaustive and Siri may recognize many other phrases.

| Locale | Example 1 | Example 2 |
| --- | --- | --- |
| en | Create a note called Vacation saying I love Montreal on `<appName>`. | Make a note in my Puppies folder called St. Bernards. |
| zh_Cn | 创建一个叫做度假的便笺说我爱 蒙特利尔(在 `<appName>` 上) | 在我的名字叫做小狗的文件夹里创建一个 便笺叫做圣伯纳犬 |
| zh_HK | (喺 `<appName>` 入面)新增一個叫做假期嘅備忘錄內容係我愛日本 | 喺我嘅狗仔資料夾入面新增一個叫做聖班納犬嘅備忘錄 |
| zh_TW | 新增一個叫做假期的備忘錄說我愛蒙特婁(在 `<appName>` 上) | 在我的小狗檔案夾裡面新增一個叫做聖伯納犬的備忘錄 |
| yue_CN | (喺 `<appName>` 入面)新增一个叫做假期嘅备忘录内容系我爱日本 | 喺我嘅狗仔资料夹入面新增一个叫做圣班纳犬嘅备忘录 |
| ar | أنشئ ملاحظة تحت عنوان العطلة تقول أنا أحب مونتريال (على `<appName>` ) | أنشئ ملاحظة في مجلد الجراء تحت عنوان برنارد |
| da | opret en note med titlen Ferie hvor der står Jeg elsker Montreal (i `<appName>`) | opret en note i min hundehvalpmappe med titlen St. Bernhards |
| de | Erstelle eine Notiz auf mit Namen Urlaub und Inhalt Ich liebe München | Erstelle eine Notiz (auf `<appName>` in meinem Welpen-Ordner mit Namen Dackel |
| es | Crea una nota llamada Vacaciones que diga me gusta Montreal (en appName\>) | Escribe una nota llamada San Bernardos en mi carpeta Cachorros |
| fi | Luo muistio nimeltä Loma, jossa sanotaan rakastan Pariisia (apissa `<appName>`) | Lisää kansioon nimeltä Pennut muistiinpano Bernhardinkoiria |
| fr | Créer une note nommée Vacances disant J’aime Montréal (sur `<appName>`) | Écris une note nommée Saint-Bernard dans mon dossier Animaux de compagnie |
| he | תצרי פתק שנקרא חופשה שאומר אני אוהב את מונטריאול (ב`<appName>` ) | תעשי פתק בתיקיית גורים שלי שנקרא סנט ברנרד |
| it | Crea una nota chiamata Vacanze dicendo mi piace Montreal (su `<appName>`) | Crea una nota nella mia cartella Cagnolini chiamata San Bernardi |
| ja | (`<appName>` で)休暇というメモを作ってモントリオール大好きと書いて | 子犬フォルダにセントバーナードというメモを作って |
| ko | (`<appName>` 에) 나는 몬트리얼을 사랑해라고 휴가 노트를 만들어 | 강아지 폴더에 세인트 버나드라는 이름의 노트 생성해줘 |
| ms | Cipta satu nota dinamakan Cuti katakan saya suka Montreal (pada `<appName>`) | Catat nota dalam folder Anak anjing saya bertajuk St. Bernards |
| nb | Lag et notat som heter Ferie hvor det står Jeg elsker Montreal (i `<appName>`) | Lag et notat i Valper mappen som heter St. Bernards |
| nl | Maak een notitie genaamd vakantie waarin staat ik hou van Montreal (in `<appName>`) | Maak een notitie in mijn puppies-map genaamd Sint-Bernard |
| pt | Criar uma nota chamada Férias dizendo Eu amo Nova Iorque (no `<appName>`) | Crie uma nota na minha pasta Cachorros chamada Pastor Alemão |
| ru | Создать заметку под названием Каникулы в которой говорится я люблю Монреаль (в `<appName>`) | Сделай заметку Сен-Бернар в моей папке Щенки |
| sv | Skapa en anteckning som heter Semester där det står jag älskar Montreal (i `<appName>`) | Skapa en anteckning i min valpmapp som heter Sankt Bernard |
| th | สร้างโน้ตชื่อว่าพักร้อนเขียนว่าฉันอยากไปพัทยา (บนแอพ `<appName>`) | สร้างโน้ตในโฟลเดอร์สถานที่ท่องเที่ยวเขียนว่าเชียงใหม่ |
| tr | (`<appName>` ’de) Tatil adlı bir not oluştur | Not al Paris’te görülecek yerler |

In the preceding examples, `<appName>` represents the name of the app whose Intents extension handles the request.

## Topics

### Initializing the Intent Object

- [initWithTitle:content:groupName:](increatenoteintent/init%28title_content_groupname_%29.md): Deprecated. Initializes the intent object with the specified note content.

### Getting the Note Content

- [title](increatenoteintent/title.md): Deprecated. The title text for the note.
- [content](increatenoteintent/content.md): Deprecated. The main content of the note.
- [groupName](increatenoteintent/groupname.md): Deprecated. The group that contains the note.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### Note Creation

- [INCreateNoteIntentHandling](increatenoteintenthandling.md): Deprecated. The handler interface for creating notes.
- [INCreateNoteIntentResponse](increatenoteintentresponse.md): Deprecated. Your app’s response to a request to create a note.
