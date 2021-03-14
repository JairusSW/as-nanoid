# AS-NanoID
**NanoID Implemtation For AssemblyScript**

## About
- Works With AssemblyScript
- Isomorphic (Browser/Node)
- No Dependencies

## Installation
```bash
~ npm install as-nanoid --save
```

## Usage

**Basic Usage**
```js
import { nanoid } from 'as-nanoid'

const id = nanoid(21)
```

## Notes
- Does Not Support Secure Random

## API

### nanoid(length: string)
Creates A NanoID String.